using Microsoft.Extensions.Configuration;

 namespace dvelop.Remote
{
    public static class ConfigurationExtension
    {
        public static string SystemBaseUri(this IConfiguration configuration)
        {
            if (!string.IsNullOrEmpty(configuration["SYSTEMBASEURI"]))
            {
                return configuration["SYSTEMBASEURI"];
            }

            return !string.IsNullOrEmpty(configuration["App:SystemBaseUri"]) ? configuration["App:SystemBaseUri"] : "http://localhost";
        }

        public static string AppName(this IConfiguration configuration)
        {
            return "gitlabcidashboard";
        }

        public static string AppSignatureSecret(this IConfiguration configuration)
        {
            return configuration["SIGNATURE_SECRET"] ?? configuration["App:SignatureSecret"];
        }

        public static string AppRelativeAssetDir(this IConfiguration configuration)
        {
               return configuration["App:RelativeAssetDir"] ?? "wwwroot";
        }

        public static string AppRemoteAssetUri(this IConfiguration configuration)
        {
            return configuration["ASSET_BASE_PATH"] ?? configuration["App:RemoteAssetUri"];
        }

        public static string HgaSecret(this IConfiguration configuration)
        {
            return string.IsNullOrEmpty(configuration["HGASECRET"]) ? configuration["HttpGatewayApp:RegistrationSecret"] : configuration["HGASECRET"];
        }

        public static bool HgaAcceptSelfSignedCert(this IConfiguration configuration)
        {
            bool.TryParse(configuration["HttpGatewayApp:AcceptSelfSignedCert"], out bool result);
            return result;
        }

        public static string HostScheme(this IConfiguration configuration)
        {
            return configuration["Host:Scheme"];
        }

        public static int HostPort(this IConfiguration configuration)
        {
            return int.Parse(configuration["Host:Port"]);
        }
    }
}
