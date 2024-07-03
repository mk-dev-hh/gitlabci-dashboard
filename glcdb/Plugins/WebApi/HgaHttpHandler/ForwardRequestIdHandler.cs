using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace dvelop.Plugins.WebApi.HgaHttpHandler
{
    public class ForwardRequestIdHandler : DelegatingHandler
    {
        private readonly IHttpContextAccessor _contextAccessor;

        public ForwardRequestIdHandler(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }

        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            string requestId = _contextAccessor?.HttpContext?.TraceIdentifier;
            if (requestId != null)
                request?.Headers?.Add(RequestHeader.REQUEST_ID, requestId);
            return base.SendAsync(request, cancellationToken);
        }
    }
}