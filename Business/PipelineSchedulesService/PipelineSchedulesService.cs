using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.PipelineSchedulesService.Model;

namespace dvelop.Business.PipelineSchedulesService
{
    public interface IPipelineSchedulesService
    {
        public Task<List<SinglePipelineSchedule>> GetPipelineSchedulesByProjectIdAsync(string projectId);

        public Task<SinglePipelineSchedule> GetSinglePipelineScheduleByIdAsync(string projectId, string pipelineScheduleId);

    }

    public class PipelineSchedulesService : IPipelineSchedulesService
    {
        private readonly IPipelineSchedulesProvider _pipelineSchedulesProvider;

        public PipelineSchedulesService(IPipelineSchedulesProvider pipelineSchedulesProvider)
        {
            _pipelineSchedulesProvider = pipelineSchedulesProvider;
        }

        public async Task<List<SinglePipelineSchedule>> GetPipelineSchedulesByProjectIdAsync(string projectId)
        {
            return await _pipelineSchedulesProvider.GetPipelineSchedulesByProjectIdAsync(projectId);
        }

        public async Task<SinglePipelineSchedule> GetSinglePipelineScheduleByIdAsync(string projectId, string pipelineScheduleId)
        {
            return await _pipelineSchedulesProvider.GetSinglePipelineScheduleByIdAsync(projectId, pipelineScheduleId);
        }
    }
}
