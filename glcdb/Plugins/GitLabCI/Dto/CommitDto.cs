using Newtonsoft.Json;

namespace dvelop.Plugins.GitLabCI.Dto
{
    public class CommitDto
    {
        public string Id { get; set; }

        [JsonProperty("short_id")]
        public string ShortId { get; set; }
        public string Title { get; set; }

        [JsonProperty("author_name")]
        public string AuthorName { get; set; }

        [JsonProperty("author_email")]
        public string AuthorEmail { get; set; }

        [JsonProperty("authored_date")]
        public string AuthoredDate { get; set; }

        [JsonProperty("committer_name")]
        public string CommitterName { get; set; }

        [JsonProperty("committer_email")]
        public string CommitterEmail { get; set; }

        [JsonProperty("committed_date")]
        public string CommittedDate { get; set; }

        [JsonProperty("created_at")]
        public string CreatedAt { get; set; }
        public string Message { get; set; }

        [JsonProperty("parent_ids")]
        public string[] ParentIds { get; set; }

        [JsonProperty("web_url")]
        public string WebUrl { get; set; }
    }
}
