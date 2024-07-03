using System.Collections.Generic;
using System.Globalization;

namespace dvelop.Business.TranslationService
{
    public interface ITranslationProvider
    {
        string Get(CultureInfo language, string translationId);
        List<CultureInfo> GetTranslatableCultures();
    }
}