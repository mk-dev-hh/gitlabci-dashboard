using System.Collections.Generic;
using dvelop.Business.CommitService;
using dvelop.Business.ConfigurationService.Model;
using dvelop.Business.Provider;

namespace dvelop.Business.ConfigurationService
{
    public interface IConfigurationService
    {
        public UserConfiguration GetConfiguration();
        List<string> GetProjectIdsForDashboard();
        bool SaveUserConfiguration(UserConfiguration userConfiguration);
    }

    public class ConfigurationService : IConfigurationService
    {

        private readonly IJStoreConfigurationProvider _jStoreConfigurationProvider;
        private readonly IUserProvider _userProvider;

        public ConfigurationService(IJStoreConfigurationProvider jStoreConfigurationProvider, IUserProvider userProvider)
        {
            _jStoreConfigurationProvider = jStoreConfigurationProvider;
            _userProvider = userProvider;
        }
        public UserConfiguration GetConfiguration()
        {
            string userConfigKey = "gitlabcidashboard/" + _userProvider.CurrentUser.DvUserId.Replace("-", "") + "/configuration/";
            UserConfiguration userConfiguration = new UserConfiguration();
            userConfiguration.ConfigurationSet = true;
            userConfiguration.DashboardProjectIds = GetProjectIdsForDashboard();
            if (userConfiguration.DashboardProjectIds == null)
            {
                SetDefaultConfiguration();
                userConfiguration.DashboardProjectIds = GetProjectIdsForDashboard();
            }
            return userConfiguration;
        }

        public List<string> GetProjectIdsForDashboard()
        {
            string userConfigKey = "gitlabcidashboard/" + _userProvider.CurrentUser.DvUserId.Replace("-", "") + "/configuration/";
            if (_jStoreConfigurationProvider.ConfigurationExists(userConfigKey, "DashboardProjectIds"))
                return _jStoreConfigurationProvider.GetConfigurationValue<List<string>>(userConfigKey, "DashboardProjectIds");
            else SetDefaultConfiguration();
            return _jStoreConfigurationProvider.GetConfigurationValue<List<string>>(userConfigKey, "DashboardProjectIds");
        }

        private void SetDefaultConfiguration()
        {
            List<string> defaultProjectIds = new List<string>();
            defaultProjectIds.Add("3335");
            defaultProjectIds.Add("4029");
            defaultProjectIds.Add("4260");
            defaultProjectIds.Add("4424");
            SaveDefaultProjectIds(defaultProjectIds);
        }

        private void SaveDefaultProjectIds(List<string> defaultStartPageProjectIds)
        {
            UserConfiguration userConfiguration = new UserConfiguration();
            userConfiguration.DashboardProjectIds = defaultStartPageProjectIds;
            userConfiguration.ConfigurationSet = true;
            SaveUserConfiguration(userConfiguration);
        }

        public bool SaveUserConfiguration(UserConfiguration userConfiguration)
        {
            string userConfigKey = "gitlabcidashboard/" + _userProvider.CurrentUser.DvUserId.Replace("-", "") + "/configuration/";
            _jStoreConfigurationProvider.AddDashboardConfigurationValue(userConfigKey, "ConfigurationSet", userConfiguration.ConfigurationSet);
            return _jStoreConfigurationProvider.AddDashboardConfigurationValue(userConfigKey, "DashboardProjectIds", userConfiguration.DashboardProjectIds);
        }
    }
}
