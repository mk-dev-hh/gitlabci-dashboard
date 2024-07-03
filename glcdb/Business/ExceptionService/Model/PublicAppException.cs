using System;

namespace dvelop.Business.ExceptionService.Model
{
    public class PublicAppException : Exception
    {
        public PublicAppException(string reason, int code, object meta = null) : base(reason)
        {
            Code = code;
            Meta = meta;
        }

        public int Code { get; }

        public object Meta { get; set; }
    }
}
