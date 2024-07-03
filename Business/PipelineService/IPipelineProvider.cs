using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.PipelineService.Model;

namespace dvelop.Business.PipelineService
{
    public interface IPipelineProvider
    {
        Task<List<Pipeline>> GetPipelinesAsync(string projectId);

        Task<List<Pipeline>> GetPipelinesByBranchNameAsync(string projectId, string branchName);

        Task<SinglePipeline> GetPipelineAsync(string projectId, string pipelineId);

        Task<PipelineTriggerUserInfo> GetPipelineTriggerUserInfoAsync(string projectId, string pipelineId);
    }
}
