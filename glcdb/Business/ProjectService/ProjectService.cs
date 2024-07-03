using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.ConfigurationService;
using dvelop.Business.ConfigurationService.Model;
using dvelop.Business.ProjectService.Model;

namespace dvelop.Business.ProjectService
{
    public interface IProjectService
    {
        Task<Project> GetProjectByIdAsync(string projectId);
        Task<List<Project>> GetConfiguredDashboardProjectsAsync();
        Task<ConfigurationDto> GetConfigurationObjectAsync();
        Task<List<Project>> GetAllImportantProjectsAsync();
        bool SaveNewConfiguration(ConfigurationDto configurationDto);
    }

    public class ProjectService : IProjectService
    {
        private readonly IProjectProvider _projectProvider;
        private readonly IConfigurationService _configurationService;
        

        public ProjectService(IProjectProvider projectProvider, IConfigurationService configurationService)
        {
            _projectProvider = projectProvider;
            _configurationService = configurationService;
        }

        public async Task<List<Project>> GetConfiguredDashboardProjectsAsync()
        {
            var list = _configurationService.GetProjectIdsForDashboard();
            return await _projectProvider.GetConfiguredDashboardProjectsAsync(list);
        }

        public async Task<ConfigurationDto> GetConfigurationObjectAsync()
        {
            var conf = _configurationService.GetConfiguration();
            return await _projectProvider.GetConfigurationObjectAsync(conf);
        }

        public async Task<List<Project>> GetAllImportantProjectsAsync()
        {
            return await _projectProvider.GetAllImportantProjectsAsync();
        }

        public async Task<Project> GetProjectByIdAsync(string projectId)
        {
            return await _projectProvider.GetProjectByIdAsync(projectId);
        }

        public bool SaveNewConfiguration(ConfigurationDto configurationDto)
        {

            UserConfiguration userConfig = new UserConfiguration {ConfigurationSet = true};
            userConfig.DashboardProjectIds = new List<string>();
            foreach ( Project project in configurationDto.DashboardProjects)
            {
                userConfig.DashboardProjectIds.Add(project.Id.ToString());
            }

            return _configurationService.SaveUserConfiguration(userConfig);
        }
    }
}
