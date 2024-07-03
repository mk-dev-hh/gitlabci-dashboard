namespace dvelop.Plugins.WebApi
{
    public static class RequestHeader
    {
        public const string AUTHSESSIONID_COOKIE = "AuthSessionId";
        public const string AUTH_HEADER_SCHEME_BEARER = "Bearer";
        public const string ORIGIN_HEADER = "Origin";
        public const string SYSTEM_BASE_URI_HEADER = "x-dv-baseuri";
        public const string TENANT_ID_HEADER = "x-dv-tenant-id";
        public const string REQUEST_ID = "x-dv-request-id";
        public const string ACCEPT_LANGUAGE = "Accept-Language";
        public const string AUTHORIZATION = "Authorization";
    }
}