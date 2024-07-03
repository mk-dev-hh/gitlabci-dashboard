using System.Collections.Generic;

namespace dvelop.Business.ConfigurationService.Model
{
    public class UserConfiguration
    {
        public bool ConfigurationSet { get; set; }
        public List<string> DashboardProjectIds { get; set; }
    }
}
