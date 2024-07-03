namespace dvelop.Business.ExceptionService.Model
{
    public class BadTaskException : PublicAppException
    {
        public BadTaskException(string reason, int code) : base(reason, code) { }
    }
}
