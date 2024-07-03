using System.Collections.Generic;
using dvelop.Business.PipelineService.Model;
using dvelop.Business.UserService.Model;
using dvelop.Plugins.GitLabCI.Dto;

namespace dvelop.Plugins.GitLabCI
{
    public interface IPipelineMapper
    {
        List<Pipeline> MapFromDtoToBusinessModel(List<PipelineDto> pipelineDtos);
        PipelineTriggerUserInfo MapFromDtoToBusinessModel(PipelineTriggerUserInfoDto pipelineTriggerUserInfoDto);
        public SinglePipeline MapFromSingleDtoToBusinessModel(SinglePipelineDto singlePipelineDto);
    }

    public class PipelineMapper : IPipelineMapper
    {
        public List<Pipeline> MapFromDtoToBusinessModel(List<PipelineDto> pipelineDtos)
        {
            var pipelines = new List<Pipeline>();
            foreach (PipelineDto pipelineDto  in pipelineDtos)
            {
                Pipeline pipeline = new Pipeline();
                pipeline.Id = pipelineDto.Id;
                pipeline.Ref = pipelineDto.Ref;
                pipeline.Sha = pipelineDto.Sha;
                pipeline.Status = pipelineDto.Status;
                pipeline.CreatedAt = pipelineDto.CreatedAt;
                pipeline.UpdatedAt = pipelineDto.UpdatedAt;
                pipeline.WebUrl = pipelineDto.WebUrl;
                pipelines.Add(pipeline);
            }

            return pipelines;
        }

        public SinglePipeline MapFromSingleDtoToBusinessModel(SinglePipelineDto singlePipelineDto)
        {
            SinglePipeline singlePipeline = new SinglePipeline();

            singlePipeline.Id = singlePipelineDto.Id;
            singlePipeline.Ref = singlePipelineDto.Ref;
            singlePipeline.Sha = singlePipelineDto.Sha;
            singlePipeline.Status = singlePipelineDto.Status;
            singlePipeline.CreatedAt = singlePipelineDto.CreatedAt;
            singlePipeline.UpdatedAt = singlePipelineDto.UpdatedAt;
            singlePipeline.FinishedAt = singlePipelineDto.FinishedAt;
            singlePipeline.WebUrl = singlePipelineDto.WebUrl;
            return singlePipeline;
        }

        public PipelineTriggerUserInfo MapFromDtoToBusinessModel(PipelineTriggerUserInfoDto pipelineTriggerUserInfoDto)
        {
            PipelineTriggerUserInfo triggerInfo = new PipelineTriggerUserInfo();
            triggerInfo.User = new User();
            triggerInfo.User.Id = pipelineTriggerUserInfoDto.User.Id;
            triggerInfo.User.Name = pipelineTriggerUserInfoDto.User.Name;
            triggerInfo.User.Username = pipelineTriggerUserInfoDto.User.Username;
            triggerInfo.User.AvatarUrl = pipelineTriggerUserInfoDto.User.AvatarUrl;
            triggerInfo.User.WebUrl = pipelineTriggerUserInfoDto.User.WebUrl;
            if (pipelineTriggerUserInfoDto.StartedAt == null)
            {
                pipelineTriggerUserInfoDto.StartedAt = pipelineTriggerUserInfoDto.CreatedAt;
            }
            triggerInfo.StartedAt = pipelineTriggerUserInfoDto.StartedAt;
            triggerInfo.Duration = pipelineTriggerUserInfoDto.Duration;
            return triggerInfo;
        }
    }
}
