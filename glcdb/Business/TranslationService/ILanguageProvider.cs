using System.Globalization;

namespace dvelop.Business.TranslationService
{
    public interface ILanguageProvider
    {
        CultureInfo Language { get; }
        string LanguageId { get;  }
    }
}