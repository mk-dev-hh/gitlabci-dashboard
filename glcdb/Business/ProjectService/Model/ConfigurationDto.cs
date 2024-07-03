using System.Collections.Generic;

namespace dvelop.Business.ProjectService.Model
{
    public class ConfigurationDto
    {
        public bool ConfigurationSet { get; set; }
        public List<Project> DashboardProjects { get; set; }
    }
}
