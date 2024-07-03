using System;

namespace dvelop.Business.ExceptionService.Model
{
    public class PrivateAppException : Exception
    {
        public PrivateAppException(string message) : base(message) { }

        public PrivateAppException(string message, Exception innerException) : base(message, innerException) { }
    }
}
