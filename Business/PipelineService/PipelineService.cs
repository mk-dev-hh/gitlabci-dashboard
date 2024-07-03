using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.PipelineService.Model;

namespace dvelop.Business.PipelineService
{
    public interface IPipelineService
    {
        Task<List<Pipeline>> GetPipelinesAsync(string projectId);
        Task<SinglePipeline> GetPipelineAsync(string projectId, string pipelineId);

        Task<List<Pipeline>> GetPipelinesByBranchNameAsync(string projectId, string branchName);
        Task<PipelineTriggerUserInfo> GetPipelineTriggerUserInfoAsync(string projectId, string pipelineId);
    }

    public class PipelineService : IPipelineService
    {
        private readonly IPipelineProvider _pipelineProvider;

        public PipelineService(IPipelineProvider pipelineProvider)
        {
            _pipelineProvider = pipelineProvider;
        }

        public async Task<List<Pipeline>> GetPipelinesAsync(string projectId)
        {
            return await _pipelineProvider.GetPipelinesAsync(projectId);
        }

        public async Task<SinglePipeline> GetPipelineAsync(string projectId, string pipelineId)
        {
            return await _pipelineProvider.GetPipelineAsync(projectId, pipelineId);
        }

        public async Task<List<Pipeline>> GetPipelinesByBranchNameAsync(string projectId, string branchName)
        {
            return await _pipelineProvider.GetPipelinesByBranchNameAsync(projectId, branchName);
        }

        public async  Task<PipelineTriggerUserInfo> GetPipelineTriggerUserInfoAsync(string projectId, string pipelineId)
        {
            return await _pipelineProvider.GetPipelineTriggerUserInfoAsync(projectId, pipelineId);
        }
    }
}
