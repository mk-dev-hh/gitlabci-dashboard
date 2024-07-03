using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.BranchService.Model;

namespace dvelop.Business.BranchService
{
    public interface IBranchProvider
    {
        Task<List<Branch>> GetBranchesAsync(string projectId);
        Task<Branch> GetBranchAsync(string projectId, string branchName);
    }
}
