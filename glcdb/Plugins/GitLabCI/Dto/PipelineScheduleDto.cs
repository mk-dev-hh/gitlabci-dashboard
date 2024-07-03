using dvelop.Business.PipelineService.Model;
using Newtonsoft.Json;

namespace dvelop.Plugins.GitLabCI.Dto
{
    public class PipelineScheduleDto
    {
        public int Id { get; set; }

        public string Description { get; set; }

        [JsonProperty("ref")]
        public string Branch { get; set; }

        [JsonProperty("created_at")]
        public string CreatedAt { get; set; }

        [JsonProperty("updated_at")]
        public string UpdatedAt { get; set; }

    }

    public class SinglePipelineScheduleDto
    {
        public int Id { get; set; }

        public string Description { get; set; }

        [JsonProperty("ref")]
        public string Branch { get; set; }

        [JsonProperty("created_at")]
        public string CreatedAt { get; set; }

        [JsonProperty("updated_at")]
        public string UpdatedAt { get; set; }

        [JsonProperty("last_pipeline")]
        public Pipeline LastPipeline { get; set; }

    }
}
