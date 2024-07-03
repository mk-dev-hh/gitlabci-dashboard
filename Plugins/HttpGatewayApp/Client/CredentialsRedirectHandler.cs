using System;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace dvelop.Plugins.HttpGatewayApp.Client
{
    internal class CredentialsRedirectHandler : DelegatingHandler
    {
        private readonly Uri _systemBaseUri;
        private readonly CredentialsHelper _credentialsHelper;

        public CredentialsRedirectHandler(Uri baseUri, CredentialsHelper credentialsHelper)
        {
            _systemBaseUri = baseUri;
            _credentialsHelper = credentialsHelper;
        }

        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request,
                                                                     CancellationToken cancellationToken)
        {
            HttpResponseMessage response = await base.SendAsync(request, cancellationToken).ConfigureAwait(false);
            if (response.StatusCode != HttpStatusCode.SeeOther && response.StatusCode != HttpStatusCode.Found)
                return response;
            OnRedirect(response);
            request.RequestUri = response.Headers.Location;
            response.Content?.Dispose();
            request.Method = new HttpMethod("GET");
            request.Content = null;
            return await base.SendAsync(request, cancellationToken).ConfigureAwait(false);
        }

        private void OnRedirect(HttpResponseMessage response)
        {
            // Aus Sicherheitsgründen läuft die Konfiguration der HttpGatewayApp aktuell (13.04.2015) auf einem anderen Port. D.h. im Laufe der
            // Kommunikation kommt es zu einem Redirect.
            // Da der Credential Cache allerdings so aufgebaut ist, dass pro Origin (Host+Port) ein separater Eintrag enthalten sein muss,
            // werden die Credentials nach einem Redirect auf einen anderen Port nicht automatisch mitgeschickt.
            // D.h. beim Redirect muss ein neuer Eintrag im Credential Cache erstellt werden.
            // Da man seine Credentials aber aus Sicherheitsgründen auch nicht an jede Applikation schicken will, gibt es im folgenden
            // eine Einschränkung auf Origins, die auf dem selben Host laufen, wie die HttpGatewayApp.
            Uri redirectionTarget = response.Headers.Location;
            bool redirectionHasSameOrigin = redirectionTarget.Scheme == _systemBaseUri.Scheme &&
                                            redirectionTarget.Authority == _systemBaseUri.Authority;
            if (redirectionHasSameOrigin)
                return;

            if (redirectionTarget.Host != _systemBaseUri.Host)
                return;

            if (!_credentialsHelper.UriHasCredentials(redirectionTarget))
                _credentialsHelper.AddCredentials(redirectionTarget);
        }
    }
}
