using System;
using System.Net;

namespace dvelop.Plugins.HttpGatewayApp.Client
{
    public class CredentialsHelper
    {
        private readonly CredentialCache _credentialCache;
        private readonly NetworkCredential _credential;

        public CredentialsHelper(CredentialCache credentialCache, NetworkCredential credential)
        {
            _credentialCache = credentialCache;
            _credential = credential;
        }

        public bool UriHasCredentials(Uri uri)
        {
            Uri origin = GetOriginUri(uri);
            return _credentialCache.GetCredential(origin, "Digest") != null;
        }

        public void AddCredentials(Uri uri)
        {
            Uri origin = GetOriginUri(uri);
            _credentialCache.Add(origin, "Digest", _credential);
        }

        private static Uri GetOriginUri(Uri uri)
        {
            return new Uri(uri.Scheme + "://" + uri.Authority);
        }
    }
}
