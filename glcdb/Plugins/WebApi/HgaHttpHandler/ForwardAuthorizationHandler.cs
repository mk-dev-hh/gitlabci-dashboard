using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using dvelop.Business.Provider;

namespace dvelop.Plugins.WebApi.HgaHttpHandler
{
    public class ForwardAuthorizationHandler : DelegatingHandler
    {
        private readonly IUserProvider _userProvider;

        public ForwardAuthorizationHandler(IUserProvider userProvider)
        {
            _userProvider = userProvider;
        }

        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            string authSessionId = _userProvider.CurrentUser.DvBearer;
            if (!string.IsNullOrEmpty(authSessionId))
            {
                request.Headers.Authorization = new AuthenticationHeaderValue(RequestHeader.AUTH_HEADER_SCHEME_BEARER, authSessionId);
            }
            return base.SendAsync(request, cancellationToken);
        }
    }
}
