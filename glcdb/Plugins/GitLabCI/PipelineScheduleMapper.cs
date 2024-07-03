using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.PipelineSchedulesService.Model;
using dvelop.Business.PipelineService;
using dvelop.Plugins.GitLabCI.Dto;

namespace dvelop.Plugins.GitLabCI
{
    public interface IPipelineScheduleMapper
    {
        public List<PipelineSchedule> MapPipelineScheduleFromDtoToBusinessModel(List<PipelineScheduleDto> pipelineScheduleDtos);
        public Task<SinglePipelineSchedule> MapSinglePipelineScheduleFromDtoToBusinessModel(string projectId, SinglePipelineScheduleDto pipelineScheduleDto);
    }

    public class PipelineScheduleMapper : IPipelineScheduleMapper
    {
        private readonly IPipelineProvider _pipelineProvider;
        public PipelineScheduleMapper(IPipelineProvider pipelineProvider)
        {
            _pipelineProvider = pipelineProvider;
        }
        public List<PipelineSchedule> MapPipelineScheduleFromDtoToBusinessModel(List<PipelineScheduleDto> pipelineScheduleDtos)
        {
            var pipelineSchedules = new List<PipelineSchedule>();
            foreach (PipelineScheduleDto pipelineScheduleDto  in pipelineScheduleDtos)
            {
                PipelineSchedule pipelineSchedule = new PipelineSchedule();
                pipelineSchedule.Id = pipelineScheduleDto.Id;
                pipelineSchedule.Description = pipelineSchedule.Description;
                pipelineSchedule.Branch = pipelineScheduleDto.Branch;
                pipelineSchedule.CreatedAt = pipelineScheduleDto.CreatedAt;
                pipelineSchedule.UpdatedAt = pipelineScheduleDto.UpdatedAt;
                pipelineSchedules.Add(pipelineSchedule);
            }

            return pipelineSchedules;

        }

        public async Task<SinglePipelineSchedule> MapSinglePipelineScheduleFromDtoToBusinessModel(string projectId, SinglePipelineScheduleDto singlePipelineScheduleDto)
        {
            SinglePipelineSchedule singlePipelineSchedule = new SinglePipelineSchedule();

            singlePipelineSchedule.Id = singlePipelineScheduleDto.Id;
            singlePipelineSchedule.Description = singlePipelineScheduleDto.Description;
            singlePipelineSchedule.Branch = singlePipelineScheduleDto.Branch;
            singlePipelineSchedule.CreatedAt = singlePipelineScheduleDto.CreatedAt;
            singlePipelineSchedule.UpdatedAt = singlePipelineScheduleDto.UpdatedAt;
            singlePipelineSchedule.LastPipeline = await _pipelineProvider.GetPipelineAsync(projectId, singlePipelineScheduleDto.LastPipeline.Id);
            return singlePipelineSchedule;
        }
    }
}
