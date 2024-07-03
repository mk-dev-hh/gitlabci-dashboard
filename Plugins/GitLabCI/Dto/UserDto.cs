using Newtonsoft.Json;

namespace dvelop.Plugins.GitLabCI.Dto
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        [JsonProperty("avatar_url")]
        public string AvatarUrl { get; set; }
        [JsonProperty("web_url")]
        public string WebUrl { get; set; }
    }
}
