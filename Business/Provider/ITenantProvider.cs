using System;

namespace dvelop.Business.Provider
{
    public interface ITenantProvider
    {
        string TenantId { get; set;}
        Uri SystemBaseUri { get; set;}
    }
}
