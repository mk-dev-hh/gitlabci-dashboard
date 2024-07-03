using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.CommitService;
using dvelop.Business.CommitService.Model;
using Microsoft.AspNetCore.Mvc;

namespace dvelop.Remote.Controller.Commits
{
    [Route("/api/{projectId}/commits/")]
    public class CommitsController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly ICommitService _commitService;

        public CommitsController(ICommitService commitService)
        {
            _commitService = commitService;
        }

        [Produces("application/json")]
        [HttpGet("")]
        public async Task<ActionResult<List<Commit>>> GetCommits(string projectId)
        {
            return await _commitService.GetCommitsAsync(projectId);
        }

        [Produces("application/json")]
        [HttpGet("{id}")]
        public async Task<ActionResult<Commit>> GetCommit(string projectId, string id)
        {
            return await _commitService.GetCommitAsync(projectId, id);
        }
    }
}
