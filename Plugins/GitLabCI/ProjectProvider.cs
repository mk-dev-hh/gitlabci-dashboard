using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using dvelop.Business.ConfigurationService;
using dvelop.Business.ConfigurationService.Model;
using dvelop.Business.ProjectService;
using dvelop.Business.ProjectService.Model;
using dvelop.Business.Provider;
using dvelop.Plugins.GitLabCI.Dto;
using Newtonsoft.Json;

namespace dvelop.Plugins.GitLabCI
{

    public class ProjectProvider : IProjectProvider
    {
        private interface IProjectMapper
        {

            Task<ConfigurationDto> GetConfigurationDtoFromStorage(UserConfiguration userConfiguration);
            Task<List<Project>> GetProjectListFromIds(List<string> projectIds);

            Project GetBuisnessFromDto(ProjectDto dto);
        }
        private class ProjectMapper : IProjectMapper
        {

            private readonly ProjectProvider _projectProvider;
            public ProjectMapper(ProjectProvider projectProvider)
            {
                _projectProvider = projectProvider;
            }


            public async Task<List<Project>> GetProjectListFromIds(List<string> projectIds)
            {
                List<Project> projects = new List<Project>();
                foreach (var id in projectIds)
                {
                    projects.Add(await _projectProvider.GetProjectByIdAsync(id));
                }

                return projects;
            }

            public Project GetBuisnessFromDto(ProjectDto dto)
            {
                var project = new Project();
                project.Id = dto.Id;
                project.Name = dto.Name;
                project.DefaultBranch = dto.DefaultBranch;
                return project;
            }

            public async Task<ConfigurationDto> GetConfigurationDtoFromStorage(UserConfiguration userConfiguration)
            {
                ConfigurationDto configDto = new ConfigurationDto();
                configDto.ConfigurationSet = userConfiguration.ConfigurationSet;
                configDto.DashboardProjects = await this.GetProjectListFromIds(userConfiguration.DashboardProjectIds);
                return configDto;
            }
        }

        private readonly HttpClient _httpClient;
        private string gitlabciBaseUri = "https://git.d-velop.de/api/v4/projects/";
        private readonly IProjectMapper _projectMapper;
        public ProjectProvider(IJStoreConfigurationProvider jStoreConfigurationProvider)
        {
            _httpClient = new HttpClient();
            _httpClient.DefaultRequestHeaders.Accept.Clear();
            _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            _projectMapper = new ProjectMapper(this);
        }

        public async Task<Project> GetProjectByIdAsync(string projectId)
        {
            var gitLabProjectUri = this.gitlabciBaseUri + projectId;
            var baseUri = new Uri(gitLabProjectUri);
            var uri = new Uri(baseUri, "/api/v4/projects/" + projectId + "?private_token=5HrUzhmxPAKZfcmg-ZP-");
            HttpResponseMessage responseMessage = await _httpClient.GetAsync(uri);

            if (!responseMessage.IsSuccessStatusCode)
            {
                return null;
            }

            string projectString = await responseMessage.Content.ReadAsStringAsync();
            var projectDto = JsonConvert.DeserializeObject<ProjectDto>(projectString);
            var project =  _projectMapper.GetBuisnessFromDto(projectDto);
            return project;
        }

        public async Task<List<Project>> GetConfiguredDashboardProjectsAsync(List<string> projectIdsList)
        {
            return await _projectMapper.GetProjectListFromIds(projectIdsList);
        }

        public async Task<ConfigurationDto> GetConfigurationObjectAsync(UserConfiguration userConfiguration)
        {
            return await _projectMapper.GetConfigurationDtoFromStorage(userConfiguration);
        }

        public async Task<List<Project>> GetAllImportantProjectsAsync()
        {
            var baseUri = new Uri(this.gitlabciBaseUri);
            var uri = new Uri(baseUri, "/api/v4/projects"+"?pagination=true&per_page=100&visibility=internal&membership=true&order_by=last_activity_at&private_token=5HrUzhmxPAKZfcmg-ZP-");
            HttpResponseMessage responseMessage = await _httpClient.GetAsync(uri);
            if (!responseMessage.IsSuccessStatusCode)
            {
                return null;
            }

            var projectsDtos = JsonConvert.DeserializeObject<List<ProjectDto>>(await responseMessage.Content.ReadAsStringAsync());
            var projectsSecond = await this.GetAllImportantProjectsSecondPageAsync();
            var projects = new List<Project>();
            foreach (var projectDto in projectsDtos)
            {
                projects.Add( _projectMapper.GetBuisnessFromDto(projectDto));
            }

            foreach (var project in projectsSecond)
            {
                projects.Add(project);
            }
            return projects;
        }

        private async Task<List<Project>> GetAllImportantProjectsSecondPageAsync()
        {
            var baseUri = new Uri(this.gitlabciBaseUri);
            var uri = new Uri(baseUri, "/api/v4/projects"+"?pagination=true&per_page=100&page=2&visibility=internal&membership=true&order_by=last_activity_at&private_token=5HrUzhmxPAKZfcmg-ZP-");
            HttpResponseMessage responseMessage = await _httpClient.GetAsync(uri);
            if (!responseMessage.IsSuccessStatusCode)
            {
                return null;
            }

            var projectsDto = JsonConvert.DeserializeObject<List<ProjectDto>>(await responseMessage.Content.ReadAsStringAsync());
            var projects = new List<Project>();
            foreach (var dto in projectsDto)
            {
                projects.Add(_projectMapper.GetBuisnessFromDto(dto));
            }
            return projects;
        }
    }
}
