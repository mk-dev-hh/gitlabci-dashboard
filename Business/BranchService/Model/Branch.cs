using dvelop.Business.CommitService.Model;

namespace dvelop.Business.BranchService.Model
{
    public class Branch
    {
        public string Name { get; set; }
        public bool Merged { get; set; }
        public bool Protected { get; set; }
        public bool Default { get; set; }
        public bool DevelopersCanPush { get; set; }
        public bool DevelopersCanMerge { get; set; }
        public bool CanPush { get; set; }
        public string WebUrl { get; set; }
        public Commit Commit { get; set; }
    }
}
