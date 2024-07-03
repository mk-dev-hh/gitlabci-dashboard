using System.Data.Common;

namespace dvelop.Business.UserService.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string AvatarUrl { get; set; }
        public string WebUrl { get; set; }
    }
}
