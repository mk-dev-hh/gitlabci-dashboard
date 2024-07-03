using Newtonsoft.Json;

namespace dvelop.Plugins.GitLabCI.Dto
{
    public class PipelineDto
    {
        public string Id { get; set; }
        public string Sha { get; set; }
        public string Ref { get; set; }
        public string Status { get; set; }

        [JsonProperty("created_at")]
        public string CreatedAt { get; set; }

        [JsonProperty("updated_at")]
        public string UpdatedAt { get; set; }

        [JsonProperty("web_url")]
        public string WebUrl { get; set; }
    }

    public class SinglePipelineDto
    {

        public string Id { get; set; }

        public string Sha { get; set; }

        public string Ref { get; set; }

        public string Status { get; set; }

        [JsonProperty("created_at")]
        public string CreatedAt { get; set; }

        [JsonProperty("updated_at")]
        public string UpdatedAt { get; set; }

        [JsonProperty("finished_at")]
        public string FinishedAt { get; set; }

        [JsonProperty("web_url")]
        public string WebUrl { get; set; }
    }
}
