using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;

namespace dvelop.Plugins.WebApi.HgaHttpHandler
{
    public class ForwardLanguageHandler : DelegatingHandler
    {
        private readonly IHttpContextAccessor _contextAccessor;

        public ForwardLanguageHandler(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }

        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            string language = null;

            if (_contextAccessor?.HttpContext?.Request?.Headers != null && _contextAccessor.HttpContext.Request.Headers.TryGetValue(RequestHeader.ACCEPT_LANGUAGE, out StringValues values))
            {
                List<string> languages = values.First().Split(',').ToList();
                if (languages.Count > 0)
                    language = languages[0];
            }

            if (language != null)
                request.Headers.AcceptLanguage.Add(new StringWithQualityHeaderValue(language));
            return base.SendAsync(request, cancellationToken);
        }
    }
}
