using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.BranchService.Model;

namespace dvelop.Business.BranchService
{
    public interface IBranchService
    {
        Task<List<Branch>> GetBranchesAsync(string projectId);
        Task<Branch> GetBranchAsync(string projectId, string pipelineId);
    }

    public class BranchService : IBranchService
    {
        private readonly IBranchProvider _branchProvider;

        public BranchService(IBranchProvider branchProvider)
        {
            _branchProvider = branchProvider;
        }

        public async Task<List<Branch>> GetBranchesAsync(string projectId)
        {
            return await _branchProvider.GetBranchesAsync(projectId);
        }

        public async Task<Branch> GetBranchAsync(string projectId, string pipelineId)
        {
            return await _branchProvider.GetBranchAsync(projectId, pipelineId);
        }
    }
}
