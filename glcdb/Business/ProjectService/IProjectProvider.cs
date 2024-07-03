using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.ConfigurationService.Model;
using dvelop.Business.ProjectService.Model;

namespace dvelop.Business.ProjectService
{
    public interface IProjectProvider
    {
        Task<Project> GetProjectByIdAsync(string projectId);
        Task<List<Project>> GetConfiguredDashboardProjectsAsync(List<string> projectIdsList);
        Task<ConfigurationDto> GetConfigurationObjectAsync(UserConfiguration userConfiguration);
        Task<List<Project>> GetAllImportantProjectsAsync();
    }
}
