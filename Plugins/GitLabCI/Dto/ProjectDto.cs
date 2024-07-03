using Newtonsoft.Json;

namespace dvelop.Plugins.GitLabCI.Dto
{
    public class ProjectDto
    {

        public int Id { get; set; }
        public string Name { get; set; }
        [JsonProperty("default_branch")]
        public string DefaultBranch { get; set; }
    }
}
