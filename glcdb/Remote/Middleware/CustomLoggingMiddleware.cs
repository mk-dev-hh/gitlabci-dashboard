using System;
using System.Threading.Tasks;
using dvelop.Common.Logging;
using dvelop.Common.Logging.Extensions;
using dvelop.Plugins.WebApi.HttpContextMiddleware;
using log4net;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;

namespace dvelop.Remote.Middleware
{
    public class CustomLoggingMiddleware
    {
        private readonly RequestDelegate _next;
        private static readonly ILog Logger = LogManager.GetLogger(typeof(CustomLoggingMiddleware));

        public CustomLoggingMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            try
            {
                using (StructuredDataLoggingExtension.LogicalThreadContextWithStructuredData(GetStructuredData(httpContext)))
                {
                    if (!RequestIsExceptionHandling(httpContext))
                    {
                        Logger.Info("####################################################");
                        Logger.Info($"CALL: {httpContext.Request.Method} - {httpContext.Request.GetDisplayUrl()}");
                        Logger.Info($"Accept-Header: {httpContext.Request.Headers["Accept"]}");
                        Logger.Info($"RequestId: {httpContext.RequestId()}");
                    }
                    else
                    {
                        Logger.Info("Re-execute request to exception handler.");
                    }

                    await _next(httpContext);
                    Logger.Info($"CALL finished with Statuscode {httpContext.Response?.StatusCode}.");
                    Logger.Info("####################################################");
                }
            }
            catch (Exception ex)
            {
                using (StructuredDataLoggingExtension.LogicalThreadContextWithStructuredData(GetStructuredData(httpContext)))
                    Logger.LogException(ex);
                throw;
            }
        }

        private static bool RequestIsExceptionHandling(HttpContext context)
        {
            var exceptionHandlerFeature = context.Features.Get<IExceptionHandlerFeature>();
            return exceptionHandlerFeature != null;
        }

        private StructuredData GetStructuredData(HttpContext httpContext)
        {
            string requestId = httpContext.RequestId();
            StructuredData ctx = new StructuredData("ctx")
            {
                {"rid", requestId}
            };
            return ctx;
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class CustomLoggingMiddlewareExtensions
    {
        public static IApplicationBuilder UseCustomLoggingMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<CustomLoggingMiddleware>();
        }
    }
}
