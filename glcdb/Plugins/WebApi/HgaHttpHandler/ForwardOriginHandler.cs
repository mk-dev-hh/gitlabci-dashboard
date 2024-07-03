using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using dvelop.Business.Provider;

namespace dvelop.Plugins.WebApi.HgaHttpHandler
{
    public class ForwardOriginHandler : DelegatingHandler
    {
        private readonly ITenantProvider _tenantProvider;

        public ForwardOriginHandler(ITenantProvider tenantProvider)
        {
            _tenantProvider = tenantProvider;
        }

        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            if (request.Headers.Contains(RequestHeader.ORIGIN_HEADER))
                return base.SendAsync(request, cancellationToken);

            if (_tenantProvider.SystemBaseUri != null)
            {
                request.Headers.Add(RequestHeader.ORIGIN_HEADER, _tenantProvider.SystemBaseUri.GetLeftPart(UriPartial.Authority));
            }

            return base.SendAsync(request, cancellationToken);
        }

    }
}
