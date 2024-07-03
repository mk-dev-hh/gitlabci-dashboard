using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;

namespace dvelop.Plugins.WebApi.HttpContextMiddleware
{
    public class HttpContextMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly Uri _defaultSystemBaseUri;

        public static readonly string TenantIdKey = $"{nameof(HttpContextMiddleware)}.{nameof(TenantIdValue)}";
        public static readonly string AuthorizationKey = $"{nameof(HttpContextMiddleware)}.{nameof(AuthorizationValue)}";
        public static readonly string LanguageKey = $"{nameof(HttpContextMiddleware)}.{nameof(LanguageValue)}";
        public static readonly string SystemBaseUriKey = $"{nameof(HttpContextMiddleware)}.{nameof(SystemBaseUriValue)}";
        public static readonly string RequestIdKey = $"{nameof(HttpContextMiddleware)}.{nameof(RequestIdValue)}";
        public static readonly string OriginKey = $"{nameof(HttpContextMiddleware)}.{nameof(OriginValue)}";

        public HttpContextMiddleware(RequestDelegate next, Uri defaultSystemBaseUri)
        {
            _next = next;
            _defaultSystemBaseUri = defaultSystemBaseUri;
        }

        public async Task Invoke(HttpContext context)
        {
            context.Items[LanguageKey] = LanguageValue(context);
            context.Items[TenantIdKey] = TenantIdValue(context);
            context.Items[SystemBaseUriKey] = SystemBaseUriValue(context, _defaultSystemBaseUri);
            context.Items[RequestIdKey] = RequestIdValue(context);
            context.Items[OriginKey] = OriginValue(context);
            context.Items[AuthorizationKey] = AuthorizationValue(context);

            await _next(context);
        }

        private static string TenantIdValue(HttpContext context, string defaultTenantId = "0")
        {
            if (context?.Request?.Headers == null || !context.Request.Headers.TryGetValue(RequestHeader.TENANT_ID_HEADER, out StringValues values))
                return defaultTenantId;
            string tenant = values.First().Trim().TrimStart('0').ToLower();
            return tenant == "" ? defaultTenantId : tenant;
        }

        private static Uri SystemBaseUriValue(HttpContext context, Uri defaultSystemBaseUri)
        {
            if (context?.Request?.Headers != null && context.Request.Headers.TryGetValue(RequestHeader.SYSTEM_BASE_URI_HEADER, out StringValues values))
                return new Uri(values.First());
            return defaultSystemBaseUri;
        }

        public static string RequestIdValue(HttpContext context)
        {
            if (context?.Request?.Headers != null && context.Request.Headers.TryGetValue(RequestHeader.REQUEST_ID, out StringValues values))
                return values.First();
            // old GetCorrelationId ?!
            return context?.TraceIdentifier;
        }

        public static string OriginValue(HttpContext context)
        {
            if (context?.Request?.Headers != null && context.Request.Headers.TryGetValue(RequestHeader.ORIGIN_HEADER, out StringValues values))
                return values.First();
            return null;
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

        private static AuthenticationHeaderValue AuthorizationValue(HttpContext context)
        {
            if (context?.Request?.Headers == null)
                return null;

            string authSessionIdFromAuthorizationHeader = null;

            if (context.Request.Headers.TryGetValue(RequestHeader.AUTHORIZATION, out StringValues authValues))
                if (AuthenticationHeaderValue.TryParse(authValues.First(), out AuthenticationHeaderValue authorization) &&
                    authorization.Scheme.Equals(RequestHeader.AUTH_HEADER_SCHEME_BEARER, StringComparison.OrdinalIgnoreCase))
                    authSessionIdFromAuthorizationHeader = authorization.Parameter;

            string authSessionIdCookie = null;
            if (context.Request.Cookies.ContainsKey(RequestHeader.AUTHSESSIONID_COOKIE))
                authSessionIdCookie = context.Request.Cookies[RequestHeader.AUTHSESSIONID_COOKIE];

            if (authSessionIdFromAuthorizationHeader == null)
                return authSessionIdCookie != null ? new AuthenticationHeaderValue(RequestHeader.AUTH_HEADER_SCHEME_BEARER, authSessionIdCookie) : null;

            if (authSessionIdCookie != null && authSessionIdFromAuthorizationHeader != authSessionIdCookie)
                return null;

            return new AuthenticationHeaderValue(RequestHeader.AUTH_HEADER_SCHEME_BEARER, authSessionIdFromAuthorizationHeader);
        }
    }
}
