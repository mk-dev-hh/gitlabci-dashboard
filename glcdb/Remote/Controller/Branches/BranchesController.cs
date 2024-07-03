using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.BranchService;
using dvelop.Business.BranchService.Model;
using Microsoft.AspNetCore.Mvc;

namespace dvelop.Remote.Controller.Branches
{
    [Route("/api/{projectId}/branches/")]
    public class BranchesController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly IBranchService _branchService;

        public BranchesController(IBranchService branchService)
        {
            _branchService = branchService;
        }

        [Produces("application/json")]
        [HttpGet("")]
        public async Task<ActionResult<List<Branch>>> GetBranches(string projectId)
        {
            return await _branchService.GetBranchesAsync(projectId);
        }

        [Produces("application/json")]
        [HttpGet("{id}")]
        public async Task<ActionResult<Branch>> GetBranch(string projectId, string id)
        {
            return await _branchService.GetBranchAsync(projectId, id);
        }
    }
}
