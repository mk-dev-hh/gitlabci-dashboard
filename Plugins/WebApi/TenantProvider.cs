using System;
using dvelop.Business.Provider;
using Microsoft.AspNetCore.Http;

namespace dvelop.Plugins.WebApi
{
    public class TenantProvider : ITenantProvider
    {
        private readonly IHttpContextAccessor _context;

        private static readonly string TenantIdKey = $"{nameof(ITenantProvider)}.{nameof(TenantId)}";
        private static readonly string SystemBaseUriKey = $"{nameof(ITenantProvider)}.{nameof(SystemBaseUri)}";

        public TenantProvider(IHttpContextAccessor context)
        {
            _context = context;
        }

        public string TenantId
        {
            get => _context.HttpContext.Items[TenantIdKey] as string;
            set => _context.HttpContext.Items[TenantIdKey] = value;
        }

        public Uri SystemBaseUri {
            get => _context.HttpContext.Items[SystemBaseUriKey] as Uri;
            set => _context.HttpContext.Items[SystemBaseUriKey] = value;
        }
    }
}
