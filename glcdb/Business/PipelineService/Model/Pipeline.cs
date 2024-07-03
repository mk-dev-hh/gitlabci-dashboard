
namespace dvelop.Business.PipelineService.Model
{
    public class Pipeline
    {
        public string Id { get; set; }
        public string Sha { get; set; }
        public string Ref { get; set; }
        public string Status { get; set; }
        public string CreatedAt { get; set; }
        public string UpdatedAt { get; set; }
        public string WebUrl { get; set; }
    }

    public class SinglePipeline
    {
        public string Id { get; set; }
        public string Sha { get; set; }
        public string Ref { get; set; }
        public string Status { get; set; }
        public string CreatedAt { get; set; }
        public string UpdatedAt { get; set; }
        public string FinishedAt { get; set; }
        public string WebUrl { get; set; }
    }
}
