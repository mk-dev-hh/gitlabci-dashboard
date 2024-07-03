using System;
using dvelop.Business.ExceptionService.Model;

namespace dvelop.Business.ExceptionService
{
    public static class Exceptions
    {
        #region Allgemeine Fehler

        public static PrivateAppException GetPrivateAppException(string message)
        {
            return new PrivateAppException(message);
        }

        public static PrivateAppException GetPrivateAppException(string message, Exception innerException)
        {
            return new PrivateAppException(message, innerException);
        }

        public static ServiceUnavailableException ServiceUnavailable()
        {
            return new ServiceUnavailableException("A service is unavailable.", 0);
        }
        
        #endregion
    }
}
