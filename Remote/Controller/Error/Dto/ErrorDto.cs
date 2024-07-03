namespace dvelop.Remote.Controller.Error.Dto
{
    public class ErrorDto
    {
        public int ErrorCode { get; set; }
        public string Reason { get; set; }
        public object Meta { get; set; }
    }
}
