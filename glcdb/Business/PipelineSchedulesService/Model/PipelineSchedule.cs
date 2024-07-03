using dvelop.Business.PipelineService.Model;

namespace dvelop.Business.PipelineSchedulesService.Model
{
    public class PipelineSchedule
    {
        public int Id { get; set; }

        public string Description { get; set; }
        public string Branch { get; set; }

        public string CreatedAt { get; set; }

        public string UpdatedAt { get; set; }
    }

    public class SinglePipelineSchedule
    {
        public int Id { get; set; }

        public string Description { get; set; }
        public string Branch { get; set; }
        public string CreatedAt { get; set; }
        public string UpdatedAt { get; set; }
        public SinglePipeline LastPipeline { get; set; }
    }
}
