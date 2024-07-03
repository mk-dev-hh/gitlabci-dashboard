using System;
using System.Net.NetworkInformation;
using dvelop.Common.Logging;
using dvelop.Plugins.HttpGatewayApp.Client;
using dvelop.Remote;
using dvelop.Remote.DependencyInjection;
using log4net;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace dvelop.Hosts.Gitlabcidashboard
{
    public class Program
    {
        private static readonly ILog Logger = LogManager.GetLogger(typeof(Program));

        public static void Main(string[] args)
        {
            Configurator.Configure();
            Logger.Info("app started");
            string environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            Logger.Debug("Environment: " + environment);

            IConfiguration configuration = BuildConfiguration(environment, args);

            Logger.Info("SystemBaseUri: " + configuration.SystemBaseUri());

            IWebHostBuilder hostBuilder = BuildWebHost(configuration);

            string hostName = IPGlobalProperties.GetIPGlobalProperties().HostName;
            string domainName = IPGlobalProperties.GetIPGlobalProperties().DomainName;
            var appInstanceBaseUri = new UriBuilder
            {
                Scheme = configuration.HostScheme(),
                Host = $"{hostName}.{domainName}",
                Port = configuration.HostPort()
            };
            Logger.Info("OwnUri: " + appInstanceBaseUri);

            var hgaClient = new HttpGatewayClient(new Uri(configuration.SystemBaseUri()),
                "appsadmin",
                configuration.HgaSecret(),
                 configuration.HgaAcceptSelfSignedCert());
            Uri unregisterUri = hgaClient.Register(configuration.AppName(), appInstanceBaseUri.ToString()).Result;

            hostBuilder.UseUrls(appInstanceBaseUri.ToString())
                .Build()
                .Run();

            hgaClient.Unregister(unregisterUri);
        }

        private static IConfiguration BuildConfiguration(string env, string[] args)
        {
            string jsonFileName = string.IsNullOrEmpty(env) ? "appsettings.json" : $"appsettings.{env}.json";
            Logger.Debug($"Read configuration: {jsonFileName}");
            IConfiguration configuration = new ConfigurationBuilder().AddJsonFile(jsonFileName, true, true)
                .AddEnvironmentVariables()
                .AddCommandLine(args)
                .Build();
            return configuration;
        }

        private static IWebHostBuilder BuildWebHost(IConfiguration configuration)
        {
            return WebHost.CreateDefaultBuilder()
                .ConfigureServices(sc => sc.AddSingleton<ICustomServiceProviderFactory>(new ServiceProviderFactory()))
                .UseConfiguration(configuration)
                .UseStartup<Startup>();
        }
    }
}
