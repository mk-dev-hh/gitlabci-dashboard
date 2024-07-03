using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using dvelop.Business.Provider;
using dvelop.Plugins.WebApi.HgaHttpHandler;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace dvelop.Plugins.WebApi.HttpClients
{
    public class TenantHttpClient : HttpClient
    {
        public TenantHttpClient(HttpMessageHandler handler) : base(handler) { }
    }

    public static class TenantHttpClientExtension
    {
        public static void AddTenantHttpClient(this IServiceCollection services)
        {
            TenantHttpClient HttpClientFactoryMethod(IServiceProvider serviceProvider)
            {
                var httpClientHandler = new HttpClientHandler
                {
                    UseCookies = false,
                    #if DEBUG
                    ServerCertificateCustomValidationCallback = (message, cert, chain, errors) => true
                    #endif
                };

                var contextAccessor = serviceProvider.GetService<IHttpContextAccessor>();
                var tenantProvider = serviceProvider.GetService<ITenantProvider>();
                var userProvider = serviceProvider.GetService<IUserProvider>();
                var handlers = new List<DelegatingHandler>
                {
                    new ForwardOriginHandler(tenantProvider),
                    new ForwardRequestIdHandler(contextAccessor),
                    new ForwardAuthorizationHandler(userProvider),
                    new ForwardLanguageHandler(contextAccessor)
                };

                var httpClient = new TenantHttpClient(HttpClientFactory.CreatePipeline(httpClientHandler, handlers))
                {
                    BaseAddress = null
                };

                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/hal+json"));
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json", 0.8));
                return httpClient;
            }
            services.TryAddSingleton(HttpClientFactoryMethod);
        }
    }
}
