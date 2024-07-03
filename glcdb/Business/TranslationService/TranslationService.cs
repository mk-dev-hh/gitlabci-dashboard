using System.Collections.Generic;
using System.Globalization;
using System.Resources;
using dvelop.Business.ExceptionService;
using log4net;

namespace dvelop.Business.TranslationService
{
    public interface ITranslationService
    {
        string Get(string id, params object[] args);
    }

    public class TranslationService : ITranslationService
    {
        private static readonly ILog Log = LogManager.GetLogger(typeof(TranslationService));

        private readonly ITranslationProvider _translationProvider;
        private readonly ILanguageProvider _languageProvider;

        public TranslationService(ITranslationProvider translationProvider, ILanguageProvider languageProvider)
        {
            _translationProvider = translationProvider;
            _languageProvider = languageProvider;
        }

        public string Get(string id, params object[] args)
        {
            try
            {
                string s = _translationProvider.Get(_languageProvider.Language, id);
                if (s != null) return string.Format(s, args);
                Log.Error($"No string for id: {id} in language: {_languageProvider.Language.EnglishName}");
                return id;
            }
            catch (MissingManifestResourceException)
            {
                Log.Error($"No string for id: {id} in language: {_languageProvider.Language.EnglishName}");
                throw Exceptions.GetPrivateAppException($"No string for id: {id} in language: {_languageProvider.Language.EnglishName}");
            }
        }
        
        public Dictionary<string, string> GetAll(string id)
        {
            var result = new Dictionary<string, string>();
            List<CultureInfo> cultures = _translationProvider.GetTranslatableCultures();
            foreach (CultureInfo culture in cultures)
            {
                string translation = _translationProvider.Get(culture, id);
                result.Add(culture.Name, translation);
            }
            return result;
        }
    }
}
