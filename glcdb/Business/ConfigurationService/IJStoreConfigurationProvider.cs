namespace dvelop.Business.ConfigurationService
{
    public interface IJStoreConfigurationProvider
    {
        bool ConfigurationExists(string key, string name);
        bool AddDashboardConfigurationValue(string key, string name, object value);
        T GetConfigurationValue<T>(string key, string name);
    }
}
