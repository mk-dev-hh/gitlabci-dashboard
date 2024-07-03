using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Reflection;
using System.Resources;
using dvelop.Business.TranslationService;
using log4net;
namespace dvelop.Plugins.Translations
{
    public class TranslationProvider : ITranslationProvider
    {
        private static readonly ILog Log = LogManager.GetLogger(typeof(TranslationProvider));

        private ResourceManager _resourceMan;

        [EditorBrowsable(EditorBrowsableState.Advanced)]
        private ResourceManager ResourceManager => _resourceMan ?? (_resourceMan = new ResourceManager("dvelop.Plugins.Translations.gitlabcidashboard", Assembly.GetExecutingAssembly()));

        public string Get(CultureInfo language, string translationId)
        {
            try
            {
                string result = ResourceManager.GetString(translationId, language);
                if (result != null) return result;
                Log.Warn($"No translation for for translationId: {translationId} for Language: {language.DisplayName}");
                Log.Warn("Returning default.");
                result = ResourceManager.GetString(translationId, new CultureInfo("de-DE"));
                return result;
            }

            catch (MissingManifestResourceException)
            {
                Log.Warn($"No translation for for translationId: {translationId} for Language: {language.DisplayName}");
                Log.Warn("Returning default.");
                return ResourceManager.GetString(translationId, new CultureInfo("de-DE"));
            }
        }

        public List<CultureInfo> GetTranslatableCultures()
        {
            var result = new List<CultureInfo>();
            CultureInfo[] cultures = CultureInfo.GetCultures(CultureTypes.AllCultures);
            foreach (CultureInfo culture in cultures)
            {
                try
                {
                    if (culture.Equals(CultureInfo.InvariantCulture)) continue;

                    ResourceSet rs = ResourceManager.GetResourceSet(culture, true, false);
                    if (rs != null) result.Add(culture);
                }
                catch (CultureNotFoundException)
                {
                }
            }
            return result;
        }
    }
}
