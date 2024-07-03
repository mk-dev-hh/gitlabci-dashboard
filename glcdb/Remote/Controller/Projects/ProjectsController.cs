using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.ProjectService;
using dvelop.Business.ProjectService.Model;
using Microsoft.AspNetCore.Mvc;

namespace dvelop.Remote.Controller.Projects
{
    [Route("/api/projects/")]
    public class ProjectsController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly IProjectService _projectService;

        public ProjectsController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        [Produces("application/json")]
        [HttpGet("{projectId}")]
        public async Task<ActionResult<Project>> GetProject(string projectId)
        {
            return await _projectService.GetProjectByIdAsync(projectId);
        }

        [Consumes("application/json")]
        [HttpPost( "")]
        public IActionResult Post([FromBody] ConfigurationDto configurationDto)
        {
            if (_projectService.SaveNewConfiguration(new ConfigurationDto()
            {
                ConfigurationSet = configurationDto.ConfigurationSet,
                DashboardProjects = configurationDto.DashboardProjects
            }))return StatusCode(201);


            return StatusCode(401);
        }

        [Produces("application/json")]
        [HttpGet("dashboard/")]
        public async Task<ActionResult<List<Project>>> GetDashboardProjectsFromConfiguration()
        {
            return await _projectService.GetConfiguredDashboardProjectsAsync();

        }

        [Produces("application/json")]
        [HttpGet("configurationDto/")]
        public async Task<ActionResult<ConfigurationDto>> GetConfigurationDtoObject()
        {
            return await _projectService.GetConfigurationObjectAsync();
        }


        [Produces("application/json")]
        [HttpGet("relevant/")]
        public async Task<ActionResult<List<Project>>> GetAllRelevantProjects()
        {
            return await _projectService.GetAllImportantProjectsAsync();
        }
    }
}

