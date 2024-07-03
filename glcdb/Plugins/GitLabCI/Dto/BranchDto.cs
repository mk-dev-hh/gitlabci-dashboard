using Newtonsoft.Json;

namespace dvelop.Plugins.GitLabCI.Dto
{
    public class BranchDto
    {
        public string Name { get; set; }
        public bool Merged { get; set; }
        public bool Protected { get; set; }
        public bool Default { get; set; }

        [JsonProperty("developers_can_push")]
        public bool DevelopersCanPush { get; set; }

        [JsonProperty("developers_can_merge")]
        public bool DevelopersCanMerge { get; set; }

        [JsonProperty("can_push")]
        public bool CanPush { get; set; }

        [JsonProperty("web_url")]
        public string WebUrl { get; set; }

        [JsonProperty("commit")]
        public CommitDto Commit { get; set; }
    }
}
