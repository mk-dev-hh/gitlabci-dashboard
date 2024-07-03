using Newtonsoft.Json;

namespace dvelop.Plugins.GitLabCI.Dto
{
    public class PipelineTriggerUserInfoDto
    {
        [JsonProperty("user")]
        public UserDto User { get; set; }
        [JsonProperty("started_at")]
        public string StartedAt { get; set; }

        [JsonProperty("created_at")]
        public string CreatedAt { get; set; }

        [JsonProperty("duration")]
        public string Duration { get; set; }
    }
}
