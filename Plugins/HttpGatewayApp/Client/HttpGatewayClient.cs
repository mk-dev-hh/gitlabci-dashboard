using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text.Json;
using System.Threading.Tasks;
using dvelop.Plugins.HttpGatewayApp.Dto;
using Dvelop.Sdk.Base.Dto;
using log4net;

namespace dvelop.Plugins.HttpGatewayApp.Client
{
    public class HttpGatewayClient : IDisposable
    {
        private static readonly ILog Logger = LogManager.GetLogger(typeof(HttpGatewayClient));
        private readonly HttpClient _httpClient;
        private readonly CredentialsHelper _credentialsHelper;
        private readonly Uri _appsUri;
        private readonly Uri _appListUri;

        public HttpGatewayClient(Uri systemBaseUri, string gatewayAdminName, string gatewayAdminPasswordHash,
            bool acceptUntrustedSelfSignedHttpGatewayCertificate = false)
        {
            var credentialsCache = new CredentialCache();
            var credentials = new NetworkCredential(gatewayAdminName, gatewayAdminPasswordHash);

            var handler = new HttpClientHandler
            {
                AllowAutoRedirect = false,
                Credentials = credentialsCache,
                PreAuthenticate = true
            };
            _credentialsHelper = new CredentialsHelper(credentialsCache, credentials);
            _credentialsHelper.AddCredentials(systemBaseUri);
            var redirectHandler = new CredentialsRedirectHandler(systemBaseUri, _credentialsHelper)
            {
                InnerHandler = handler
            };

            if (acceptUntrustedSelfSignedHttpGatewayCertificate)
                handler.ServerCertificateCustomValidationCallback = ValidateAndAcceptSelfSignedCertCallback;

            _httpClient = new HttpClient(redirectHandler)
            {
                BaseAddress = new Uri(systemBaseUri, "httpgateway")
            };
            GetAppsUri(out _appsUri, out _appListUri);
        }

        public async Task<Uri> Register(string appName, string appHost, string instance = null)
        {
            var appData = new RegistrationDataDto
            {
                App = appName,
                DestinationUri = new Uri($"{appHost}{appName}").AbsoluteUri,
                Instance = instance
            };

            string serializeObject = JsonSerialize(appData);
            var stringContent = new StringContent(serializeObject);
            stringContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            Logger.Debug($"Start call to hga: {_appsUri}");
            HttpResponseMessage httpResponse = await _httpClient.PostAsync(_appsUri, stringContent);
            Logger.Debug("Finished call to hga.");
             if (httpResponse.IsSuccessStatusCode)
                 return httpResponse.Headers.Location;
             throw new Exception($"Error registering at HttpGateway. StatusCode: {httpResponse.StatusCode}");
        }

        public async Task Unregister(Uri appReference)
        {
            if (!_credentialsHelper.UriHasCredentials(appReference))
                _credentialsHelper.AddCredentials(appReference);

            Logger.Debug($"Start call to hga: {appReference}");
            HttpResponseMessage httpResponse = await _httpClient.DeleteAsync(appReference);
            Logger.Debug("Finished call to hga.");
            if (httpResponse.StatusCode == HttpStatusCode.NotFound)
                throw new ArgumentException($"Can't unregister app instance '{appReference}' because it is not registered", nameof(appReference));
            if (!httpResponse.IsSuccessStatusCode)
                throw new Exception();
        }

        public async Task<List<AppInfoDto>> GetRegisteredApps()
        {
            HttpResponseMessage responseMessage = await _httpClient.GetAsync(_appsUri);

            if (!responseMessage.IsSuccessStatusCode)
            {
                responseMessage = await _httpClient.GetAsync(_appListUri);
                if (!responseMessage.IsSuccessStatusCode)
                {
                    return null;
                }
            }

            string stringContent = await responseMessage.Content.ReadAsStringAsync();
            var apps = JsonDeserialize<AppInfoListDto>(stringContent);
            return apps.Apps;
        }

        private static bool ValidateAndAcceptSelfSignedCertCallback(object sender,
            X509Certificate certificate,
            X509Chain chain,
            SslPolicyErrors sslPolicyErrors)
        {
            bool certificateIsSignedAndValid = sslPolicyErrors == SslPolicyErrors.None;
            if (certificateIsSignedAndValid)
                return true;
            if (sslPolicyErrors != SslPolicyErrors.RemoteCertificateChainErrors)
                return false;
            if (chain == null)
                return false;
            foreach (X509ChainStatus status in chain.ChainStatus)
            {
                bool isSelfSigned = certificate.Subject == certificate.Issuer;
                if (status.Status == X509ChainStatusFlags.NoError ||
                    status.Status == X509ChainStatusFlags.UntrustedRoot && isSelfSigned)
                    continue;
                return false;
            }

            return true;
        }

        private void GetAppsUri(out Uri appsUri, out Uri appListUri)
        {
            appsUri = null;
            appListUri = null;
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get
            };
            request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/hal+json"));

            Logger.Debug("Start call to hga");
            HttpResponseMessage httpResponse = _httpClient.SendAsync(request).Result;
            Logger.Debug("Finished call to hga.");
            if (!httpResponse.IsSuccessStatusCode) throw new Exception();
            string stringContent = httpResponse.Content.ReadAsStringAsync().Result;
            var jsonObject = JsonDeserialize<HalJsonDto>(stringContent);
            if (jsonObject._links == null || jsonObject._links.Count == 0) return;
            if (!jsonObject._links.ContainsKey("apps")) return;

            appsUri = new Uri(httpResponse.RequestMessage.RequestUri, jsonObject._links["apps"].Href);
            if (jsonObject._links.ContainsKey("applist"))
            {
                appListUri = new Uri(httpResponse.RequestMessage.RequestUri, jsonObject._links["applist"].Href);
            }
        }

        private static TValue JsonDeserialize<TValue>(string stringContent)
        {
            var options = new JsonSerializerOptions
            {
                WriteIndented = true,
                PropertyNameCaseInsensitive = true,
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };

            return JsonSerializer.Deserialize<TValue>(stringContent, options);
        }

        private static string JsonSerialize(object objectContent)
        {
            var options = new JsonSerializerOptions
            {
                WriteIndented = true,
                PropertyNameCaseInsensitive = true,
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };

            return JsonSerializer.Serialize(objectContent, options);
        }

        public void Dispose()
        {
            _httpClient.Dispose();
        }
    }
}
