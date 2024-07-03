using System;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace dvelop.Plugins.WebApi.HttpContextMiddleware
{
    public static class HttpContextExtensions
    {
        public static void UseRequestContext(this IApplicationBuilder app, Uri defaultSystemBaseUri)
        {
            app.UseMiddleware<HttpContextMiddleware>(defaultSystemBaseUri);
        }

        public static AuthenticationHeaderValue Authorization(this HttpContext context)
        {
            if (context.Items.TryGetValue(HttpContextMiddleware.AuthorizationKey, out object value))
                return value as AuthenticationHeaderValue;
            return null;
        }

        public static string TenantId(this HttpContext context)
        {
            if (context.Items.TryGetValue(HttpContextMiddleware.TenantIdKey, out object value))
                return value as string;
            return null;
        }

        public static string Language(this HttpContext context)
        {
            if (context.Items.TryGetValue(HttpContextMiddleware.LanguageKey, out object value))
                return value as string;
            return null;
        }

        public static Uri SystemBaseUri(this HttpContext context)
        {
            if (context.Items.TryGetValue(HttpContextMiddleware.SystemBaseUriKey, out object value))
                return value as Uri;
            return null;
        }

        public static string RequestId(this HttpContext context)
        {
            if (context.Items.TryGetValue(HttpContextMiddleware.RequestIdKey, out object value))
                return value as string;
            return null;
        }

        public static string Origin(this HttpContext context)
        {
            if (context.Items.TryGetValue(HttpContextMiddleware.OriginKey, out object value))
                return value as string;
            return null;
        }
    }
}
