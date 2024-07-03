using System.Collections.Generic;
using System.Configuration;
using dvelop.Business.ConfigurationService;
using dvelop.Business.ConfigurationService.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace dvelop.Remote.Controller.Configuration
{
    [Route("/api/configuration/")]
    [ApiController]
    public class ConfigurationController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly IConfigurationService _configurationService;

        public ConfigurationController(IConfigurationService configurationService)
        {
            _configurationService = configurationService;
        }


        [Consumes("application/json")]
        [HttpPost( "")]
        public IActionResult Post([FromBody] UserConfiguration userConfiguration)
        {
            if (_configurationService.SaveUserConfiguration(new UserConfiguration
            {
                ConfigurationSet = userConfiguration.ConfigurationSet,
                DashboardProjectIds = userConfiguration.DashboardProjectIds
            }))return StatusCode(201);


            return StatusCode(201);
        }

        [Produces("application/json")]
        [HttpGet("")]
        public ActionResult<UserConfiguration> GetConfiguration()
        {
            UserConfiguration userConfiguration = _configurationService.GetConfiguration();
            return userConfiguration;

        }

        [Produces("application/json")]
        [HttpGet("dashboard/")]
        public ActionResult<List<string>> GetDashboardConfiguration()
        {
            //if (!_configurationService.DashboardConfigured()) return _configurationService.GetDefaultConfiguration().DashboardProjectIds;
            //return _configurationService.GetProjectIdsForDashboard();
            var list = _configurationService.GetProjectIdsForDashboard();
            return list;

        }

    }
}
