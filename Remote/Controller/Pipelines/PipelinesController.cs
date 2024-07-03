using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.PipelineService;
using dvelop.Business.PipelineService.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace dvelop.Remote.Controller.Pipelines
{
    [Route("/api/{projectId}/pipelines/")]
    public class PipelinesController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly IPipelineService _pipelineService;

        public PipelinesController(IPipelineService pipelineService)
        {
            _pipelineService = pipelineService;
        }

        [Produces("application/json")]
        [HttpGet("")]
        public async Task<ActionResult<List<Pipeline>>> GetPipelines(string projectId)
        {
            return await _pipelineService.GetPipelinesAsync(projectId);
        }

        [Produces("application/json")]
        [HttpGet("{id}")]
        public async Task<ActionResult<SinglePipeline>> GetPipeline(string projectId, string id)
        {
            return await _pipelineService.GetPipelineAsync(projectId, id);
        }

        [Produces("application/json")]
        [HttpGet("{id}/triggerUserInfo")]
        public async Task<ActionResult<PipelineTriggerUserInfo>> GetPipelineTriggerUserInfo(string projectId, string id)
        {
            return await _pipelineService.GetPipelineTriggerUserInfoAsync(projectId, id);
        }

        [Produces("application/json")]
        [HttpGet("branch/{branchName}")]
        public async Task<ActionResult<List<Pipeline>>> GetPipelinesByBranchName(string projectId, string branchName)
        {
            return await _pipelineService.GetPipelinesByBranchNameAsync(projectId, branchName);
        }
    }
}
