using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using dvelop.Business.Provider;
using dvelop.Plugins.WebApi.HttpContextMiddleware;
using dvelop.Remote.Middleware;
using Dvelop.Remote.Constraints;
using Dvelop.Sdk.IdentityProvider.Client;
using Dvelop.Sdk.IdentityProvider.Middleware;
using Dvelop.Sdk.TenantMiddleware;
using log4net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.FileProviders;
// ReSharper disable once RedundantUsingDirective
using Microsoft.Extensions.Logging;

namespace dvelop.Remote
{
    public class Startup
    {
        private readonly ICustomServiceProviderFactory _factory;

        private static readonly ILog Logger = LogManager.GetLogger(typeof(Startup));

        public Startup(IConfiguration configuration, ICustomServiceProviderFactory factory)
        {
            Logger.Debug("Startup begin");
            _factory = factory;
            Configuration = configuration;

            Console.WriteLine($"SystemBaseUri: {configuration.SystemBaseUri()}");
            Console.WriteLine($"SignatureSecret set: {!string.IsNullOrWhiteSpace(Configuration.AppSignatureSecret())}");
            Console.WriteLine($"AppName: {Configuration.AppName()}");
        }

        private IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            // Allow Classes to access the HttpContext
            services.AddHttpContextAccessor();

            services.TryAddEnumerable(ServiceDescriptor.Singleton<MatcherPolicy, ProducesMatcherPolicy>());

            // Enable d.ecs IdentityProvider
            services.AddAuthentication(options =>
            {
                options.DefaultScheme = "IdentityProvider";
                options.DefaultChallengeScheme = "IdentityProvider";
                options.DefaultForbidScheme = "IdentityProvider";

            }).AddIdentityProviderAuthentication("IdentityProvider", "d.velop Identity Provider", options => { });

            services.AddAuthorization(options =>
            {
                // DefaultPolicy will be evaluated, if there is an [Authorize] attribute, but no configuration.
                options.DefaultPolicy = new AuthorizationPolicyBuilder()
                    .RequireAuthenticatedUser()
                    .Build();

                // FallbackPolicy will be evaluated, if there is neither [Authorize] nor an [AllowAnonymous] attribute provided.
                options.FallbackPolicy= new AuthorizationPolicyBuilder()
                    .RequireAuthenticatedUser()
                    .Build();
            });
            // Create and configure Mvc
            services.AddRazorPages()
                .AddRazorPagesOptions(options => { options.Conventions.AllowAnonymousToPage("/Error"); })
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0)
                .AddJsonOptions(options =>
                {
                    options.JsonSerializerOptions.IgnoreNullValues = true;
                    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
                    options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
                });

#if !DEBUG
            services.AddLogging(
                builder => { builder.ClearProviders(); });
#endif

            services.AddDirectoryBrowser();
            services.AddRouting(routeOptions => routeOptions.AppendTrailingSlash = true );
            return _factory.CreateServiceProvider(services);
        }

        // This method gets called by the ASP .NET core runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IActionDescriptorCollectionProvider  actionDescriptorProvider)
        {
            // Print information about bound routes and the Controller, they are bound to.
            List<ActionDescriptor> routes = actionDescriptorProvider.ActionDescriptors.Items.Where(ad => ad.AttributeRouteInfo != null).ToList();
            routes.ForEach(ad =>
            {
                Logger.Info($"{ad.AttributeRouteInfo.Template} -> '/{ad.AttributeRouteInfo.Name}'");
            });

            // Important:
            // If running without 'api_custom_domains'-Feature, the requests need to be rewritten to omit the
            // API-Gateway stage /prod or /dev, if running as a d.velop cloud App within a tenant aware environment.
            app.UseRewriter(new RewriteOptions()

                // Amazon.Lambda.AspNetCoreServer.APIGatewayProxyFunction sets the BasePath-property to the name of the API-Gateway Stage.
                // This RewriteRule can or should be removed, if:
                //   - The 'api_custom_domains'-Feature is activated
                //   - There is no url-Rewriting Reverse-Proxy (You call the Api-Gateway Url directly).
                .Add(rc =>
                    {
                        PathString oldPathBase = rc.HttpContext.Request.PathBase;

                        // Set the RawTarget, because in an AWS Lambda it is not available (yet)
                        // See: https://github.com/aws/aws-lambda-dotnet/issues/656
                        var requestFeature = rc.HttpContext.Features.Get<IHttpRequestFeature>();
                        requestFeature.RawTarget ??= rc.HttpContext.Request.GetEncodedPathAndQuery();

                        rc.HttpContext.Request.PathBase = "";
                        Logger.Info($"Changed PathBase from '{oldPathBase}' to '{rc.HttpContext.Request.PathBase}'");
                        rc.Result = RuleResult.ContinueRules;
                    })

                // This redirect ensures, that a URL is always used with an trailing '/', expect in the last segment ist a '.'.
                .AddRedirect(@"^(((.*/)|(/?))[^/.]+(?!/$))$", "$1/",302)
            );

            // This will a a virtual path-segment to the application
            app.UsePathBase($"/{Configuration.AppName()}");

            app.UseRequestContext(new Uri(Configuration.SystemBaseUri()));

            // Enable Multi-Tenancy
            app.UseTenantMiddleware(new TenantMiddlewareOptions
            {
                DefaultSystemBaseUri = Configuration.SystemBaseUri(),
                DefaultTenantId = "0",
                SignatureSecretKey = Convert.FromBase64String(Configuration.AppSignatureSecret()),
                OnTenantIdentified = (tenantId, systemBaseUri) =>
                {
                    // Use Built-In Dependency Injection to Store Tenant Information (Bound to Request-Context)
                    var tenantRepository = app.ApplicationServices.GetService<ITenantProvider>();
                    tenantRepository.SystemBaseUri = new Uri(systemBaseUri);
                    tenantRepository.TenantId = tenantId;
                }
            });

            // Enable d.ecs IdentityProvider
            app.UseIdentityProvider(new IdentityProviderOptions
            {
                BaseAddress = new Uri(Configuration.SystemBaseUri()),
                HttpClient = new HttpClient(),
                TenantInformationCallback = () =>
                {
                    var tenantRepository = app.ApplicationServices.GetService<ITenantProvider>();
                    Logger.Info($"Tenant Identified {tenantRepository.TenantId} {tenantRepository.SystemBaseUri}");
                    return new TenantInformation
                    {
                        TenantId = tenantRepository.TenantId,
                        SystemBaseUri = tenantRepository.SystemBaseUri.ToString()
                    };

                }
            });

            app.UseExceptionHandler("/error/exception");
            app.UseHsts();
            app.UseCustomLoggingMiddleware();
            app.UseStatusCodePagesWithReExecute("/error/statuscode/{0}");

            app.Use(async (httpContext, next) =>
            {
                // Vary Header determines which additional header fields should be used
                // to decide if a request can be answered from a cache
                // cf. https://tools.ietf.org/html/rfc7234#section-4.1
                // accept is added because most resources deliver JSON and HTML from the same URI
                // x-dv-sig-1 ist added because most of the responses are tenant specific
                httpContext.Response.Headers.Append("vary", new[] { "accept", "accept-language", "x-dv-sig-1"});
                Logger.Debug($"{httpContext.Request.Method} ->  {httpContext.Request.Path}" );
                await next.Invoke();
            });

            app.UseCookiePolicy();

            app.UseRequestLocalization(new RequestLocalizationOptions
            {
                DefaultRequestCulture = new RequestCulture("en-US"),
                SupportedUICultures = new List<CultureInfo>
                {
                    new CultureInfo("en-US"),
                    new CultureInfo("en"),
                    new CultureInfo("de")
                },
                SupportedCultures = new List<CultureInfo>
                {
                    new CultureInfo("en")
                }
            });

            app.Use(async (ctx, next) =>
            {
#if DEBUG
                ctx.Response.OnStarting(state =>
                {
                    var context = (HttpContext) state;
                    if (context.Response.Headers.ContainsKey("cache-control"))
                        context.Response.Headers.Remove("cache-control");
                    if (context.Response.Headers.ContainsKey("expires"))
                        context.Response.Headers.Remove("expires");
                    context.Response.Headers.Add("cache-control", "no-cache, no-store");
                    context.Response.Headers.Add("expires", "-1");
                    return Task.FromResult(0);
                }, ctx);
#endif
                await next();
            });

            if (string.IsNullOrWhiteSpace(Configuration.AppRemoteAssetUri())) // If Assets are loaded from a different server, don't server files
            {
                if (string.IsNullOrWhiteSpace(Configuration.AppRelativeAssetDir())) // If no relative Asset Dir configured, use default.
                {
                    app.UseStaticFiles();
                }
                else
                {
                    // For running from within IDE, configure the Dir
                    string currentDirectory = Directory.GetCurrentDirectory();
                    string wwwroot = Path.Combine(currentDirectory, Configuration.AppRelativeAssetDir());

                    app.UseStaticFiles(new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(wwwroot),
                        RequestPath = ""
                    });
                }
            }

            app.UseRouting();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute().RequireAuthorization();
                endpoints.MapControllers(); // Map attribute-routed API controllers
                endpoints.MapRazorPages();
            });
        }
    }

    public interface ICustomServiceProviderFactory
    {
        IServiceProvider CreateServiceProvider(IServiceCollection services);
    }
}
