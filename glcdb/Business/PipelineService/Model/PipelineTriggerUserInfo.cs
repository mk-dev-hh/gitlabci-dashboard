using dvelop.Business.UserService.Model;

namespace dvelop.Business.PipelineService.Model
{
    public class PipelineTriggerUserInfo
    {
        public User User { get; set; }
        public string StartedAt { get; set; }
        public string Duration { get; set; }
    }
}
