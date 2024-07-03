using System;
using dvelop.Business.BranchService;
using dvelop.Business.CommitService;
using dvelop.Business.ConfigurationService;
using dvelop.Business.PipelineSchedulesService;
using dvelop.Business.PipelineService;
using dvelop.Business.ProjectService;
using dvelop.Business.Provider;
using dvelop.Business.TranslationService;
using dvelop.Business.VersionService;
using dvelop.Plugins.GitLabCI;
using dvelop.Plugins.JStoreUserConfig;
using dvelop.Plugins.Translations;
using dvelop.Plugins.WebApi;
using dvelop.Plugins.WebApi.HttpClients;
using dvelop.Remote.Controller.Error;
using Microsoft.Extensions.DependencyInjection;

namespace dvelop.Remote.DependencyInjection
{
    public class ServiceProviderFactory : ICustomServiceProviderFactory
    {
        public IServiceProvider CreateServiceProvider(IServiceCollection services)
        {
            AddPluginServices(services);
            AddBusinessServices(services);
            AddRemoteServices(services);

            services.AddTenantHttpClient();

            return services.BuildServiceProvider();
        }

        private static void AddPluginServices(IServiceCollection services)
        {
            services.AddSingleton<ITenantProvider, TenantProvider>();
            services.AddSingleton<IUserProvider, UserProvider>();
            services.AddSingleton<ITranslationProvider, TranslationProvider>();
            services.AddSingleton<ILanguageProvider, LanguageProvider>();
            services.AddSingleton<ILanguageProvider, LanguageProvider>();
            services.AddSingleton<IPipelineProvider, PipelineProvider>();
            services.AddSingleton<IPipelineMapper, PipelineMapper>();
            services.AddSingleton<IPipelineSchedulesProvider, PipelineSchedulesProvider>();
            services.AddSingleton<IPipelineScheduleMapper, PipelineScheduleMapper>();
            services.AddSingleton<IBranchProvider, BranchProvider>();
            services.AddSingleton<IBranchMapper, BranchMapper>();
            services.AddSingleton<ICommitProvider, CommitProvider>();
            services.AddSingleton<ICommitMapper, CommitMapper>();
            services.AddSingleton<IProjectProvider, ProjectProvider>();
            services.AddSingleton<IJStoreConfigurationProvider, JStoreConfigurationProvider>();

        }

        private static void AddBusinessServices(IServiceCollection services)
        {
            services.AddSingleton<IVersionService, VersionService>();
            services.AddSingleton<ITranslationService, TranslationService>();
            services.AddSingleton<IPipelineService, PipelineService>();
            services.AddSingleton<IPipelineSchedulesService, PipelineSchedulesService>();
            services.AddSingleton<IBranchService, BranchService>();
            services.AddSingleton<ICommitService, CommitService>();
            services.AddSingleton<IProjectService, ProjectService>();
            services.AddSingleton<IConfigurationService, ConfigurationService>();
        }

        private static void AddRemoteServices(IServiceCollection services)
        {
            services.AddSingleton<IErrorMapper, ErrorMapper>();
        }
    }
}
