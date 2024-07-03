using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.CommitService.Model;

namespace dvelop.Business.CommitService
{
    public interface ICommitProvider
    {
        Task<List<Commit>> GetCommitsAsync(string projectId);
        Task<Commit> GetCommitAsync(string projectId, string commitId);
    }
}
