using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.PipelineSchedulesService;
using dvelop.Business.PipelineSchedulesService.Model;
using Microsoft.AspNetCore.Mvc;

namespace dvelop.Remote.Controller.PipelineSchedule
{
    [Route("/api/{projectId}/pipelineSchedules/")]
    public class PipelineSchedulesController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly IPipelineSchedulesService _pipelineSchedulesService;

        public PipelineSchedulesController(IPipelineSchedulesService pipelineSchedulesService)
        {
            _pipelineSchedulesService = pipelineSchedulesService;
        }

        [Produces("application/json")]
        [HttpGet("")]
        public async Task<ActionResult<List<SinglePipelineSchedule>>> GetPipelines(string projectId)
        {
            return await _pipelineSchedulesService.GetPipelineSchedulesByProjectIdAsync(projectId);
        }

        [Produces("application/json")]
        [HttpGet("{id}")]
        public async Task<ActionResult<SinglePipelineSchedule>> GetPipeline(string projectId, string id)
        {
            return await _pipelineSchedulesService.GetSinglePipelineScheduleByIdAsync(projectId, id);
        }
    }
}
