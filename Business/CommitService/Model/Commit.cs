namespace dvelop.Business.CommitService.Model
{
    public class Commit
    {
        public string Id { get; set; }
        public string ShortId { get; set; }
        public string Title { get; set; }
        public string AuthorName { get; set; }
        public string AuthorEmail { get; set; }
        public string AuthoredDate { get; set; }
        public string CommitterName { get; set; }
        public string CommitterEmail { get; set; }
        public string CommittedDate { get; set; }
        public string CreatedAt { get; set; }
        public string Message { get; set; }
        public string[] ParentIds { get; set; }
        public string WebUrl { get; set; }
    }
}
