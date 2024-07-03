using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using dvelop.Business.TranslationService;
using dvelop.Plugins.WebApi;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;

namespace dvelop.Plugins.Translations
{
    public class LanguageProvider : ILanguageProvider
    {
        private readonly IHttpContextAccessor _contextAccessor;

        public LanguageProvider(IHttpContextAccessor httpContextAccessor)
        {
            _contextAccessor = httpContextAccessor;
        }

        private static string LanguageValue(HttpContext context)
        {
            if (context?.Request?.Headers == null || !context.Request.Headers.TryGetValue(RequestHeader.ACCEPT_LANGUAGE, out StringValues values))
                return null;
            List<string> languages = values.First().Split(',').ToList();
            if (languages.Count > 0)
                return languages[0];
            return values;
        }

        public CultureInfo Language => _contextAccessor.HttpContext != null && !string.IsNullOrWhiteSpace(LanguageValue(_contextAccessor.HttpContext))
            ? new CultureInfo(LanguageValue(_contextAccessor.HttpContext))
            : Thread.CurrentThread.CurrentUICulture;

        public string LanguageId => Language.Name;
    }
}