namespace dvelop.Business.ExceptionService.Model
{
    public class ResourceNotFoundException : PublicAppException
    {
        public ResourceNotFoundException(string reason, int code) : base(reason, code) { }
    }
}
