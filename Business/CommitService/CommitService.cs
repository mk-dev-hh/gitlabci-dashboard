using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.CommitService.Model;

namespace dvelop.Business.CommitService
{
    public interface ICommitService
    {
        Task<List<Commit>> GetCommitsAsync(string projectId);
        Task<Commit> GetCommitAsync(string projectId, string commitId);
    }

    public class CommitService : ICommitService
    {
        private readonly ICommitProvider _commitProvider;

        public CommitService(ICommitProvider commitProvider)
        {
            _commitProvider = commitProvider;
        }

        public async Task<List<Commit>> GetCommitsAsync(string projectId)
        {
            return await _commitProvider.GetCommitsAsync(projectId);
        }

        public async Task<Commit> GetCommitAsync(string projectId, string commitId)
        {
            return await _commitProvider.GetCommitAsync(projectId, commitId);
        }
    }
}
