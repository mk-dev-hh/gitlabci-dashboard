using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.PipelineSchedulesService.Model;

namespace dvelop.Business.PipelineSchedulesService
{


    public interface IPipelineSchedulesProvider
    {
        public Task<List<SinglePipelineSchedule>> GetPipelineSchedulesByProjectIdAsync(string projectId);

        public Task<SinglePipelineSchedule> GetSinglePipelineScheduleByIdAsync(string projectId, string pipelineScheduleId);

    }
}
