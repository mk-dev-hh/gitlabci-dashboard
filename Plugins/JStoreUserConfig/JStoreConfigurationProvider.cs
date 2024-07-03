using System;
using dvelop.Business.ConfigurationService;
using dvelop.jStore;

namespace dvelop.Plugins.JStoreUserConfig
{
    public class JStoreConfigurationProvider : IJStoreConfigurationProvider
    {

        private readonly TreeStore _jStore;

        public JStoreConfigurationProvider()
        {
            _jStore = new TreeStore();
        }

        public bool ConfigurationExists(string key, string name)
        {
            return _jStore.OpenKey(key, false) && _jStore.ValueExists(name);
        }

        public bool AddDashboardConfigurationValue(string key, string name, object value)
        {
            if (!_jStore.OpenKey(key, true))
                return false;
            _jStore.WriteObject(name, value);
            return true;
        }

        public T GetConfigurationValue<T>(string key, string name)
        {
            if (!_jStore.OpenKey(key, false))
                throw new Exception();
            return _jStore.ReadObject<T>(name);
        }
    }
}
