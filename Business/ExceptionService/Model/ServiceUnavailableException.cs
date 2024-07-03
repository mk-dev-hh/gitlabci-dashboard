namespace dvelop.Business.ExceptionService.Model
{
    public class ServiceUnavailableException : PublicAppException
    {
        public ServiceUnavailableException(string reason, int code) : base(reason, code) { }
    }
}