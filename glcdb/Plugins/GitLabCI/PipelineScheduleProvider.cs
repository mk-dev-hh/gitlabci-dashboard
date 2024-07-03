using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using dvelop.Business.PipelineSchedulesService;
using dvelop.Business.PipelineSchedulesService.Model;
using dvelop.Plugins.GitLabCI.Dto;
using Newtonsoft.Json;

namespace dvelop.Plugins.GitLabCI
{

    public class PipelineSchedulesProvider : IPipelineSchedulesProvider
    {

        private HttpClient _httpClient;
        private readonly IPipelineScheduleMapper _pipelineScheduleMapper;
        private string gitlabciBaseUri = "https://git.d-velop.de/api/v4/projects/";

        public PipelineSchedulesProvider(IPipelineScheduleMapper pipelineScheduleMapper)
        {
            _pipelineScheduleMapper = pipelineScheduleMapper;
            _httpClient = new HttpClient();
            _httpClient.DefaultRequestHeaders.Accept.Clear();
            _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

        }

        public async Task<List<SinglePipelineSchedule>> GetPipelineSchedulesByProjectIdAsync(string projectId)
        {
            var projectUri = this.gitlabciBaseUri + projectId;
            var baseUri = new Uri(projectUri);
            var uri = new Uri(baseUri, "/api/v4/projects/"+ projectId +"/pipeline_schedules?private_token=5HrUzhmxPAKZfcmg-ZP-&per_page=100");
            HttpResponseMessage responseMessage = await _httpClient.GetAsync(uri);

            if (!responseMessage.IsSuccessStatusCode)
            {
                return null;
            }

            string pipelineSchedulesString = await responseMessage.Content.ReadAsStringAsync();
            var pipelineSchedulesDto = JsonConvert.DeserializeObject<List<PipelineScheduleDto>>(pipelineSchedulesString);
            List<PipelineSchedule> pipelineSchedules = _pipelineScheduleMapper.MapPipelineScheduleFromDtoToBusinessModel(pipelineSchedulesDto);
            List<SinglePipelineSchedule> singlePipelineSchedules = new List<SinglePipelineSchedule>();
            foreach (PipelineSchedule pipelineSchedule in pipelineSchedules)
            {
                SinglePipelineSchedule singlePipelineSchedule = await this.GetSinglePipelineScheduleByIdAsync(projectId, pipelineSchedule.Id.ToString());
                if (singlePipelineSchedule.Branch.Equals("master") || singlePipelineSchedule.Branch.Equals("qa") || singlePipelineSchedule.Branch.Equals("develop"))
                {
                    singlePipelineSchedules.Add(singlePipelineSchedule);
                }
            }
            return singlePipelineSchedules;
        }

        public async Task<SinglePipelineSchedule> GetSinglePipelineScheduleByIdAsync(string projectId, string pipelineScheduleId)
        {

            var projectUri = this.gitlabciBaseUri + projectId;
            var baseUri = new Uri(projectUri);
            var uri = new Uri(baseUri, "/api/v4/projects/"+ projectId + "/pipeline_schedules/" + pipelineScheduleId + "?private_token=5HrUzhmxPAKZfcmg-ZP-");
            HttpResponseMessage responseMessage = await _httpClient.GetAsync(uri);
            if (!responseMessage.IsSuccessStatusCode)
            {
                return null;
            }

            string pipelinesString = await responseMessage.Content.ReadAsStringAsync();
            var pipelineScheduleDto = JsonConvert.DeserializeObject<SinglePipelineScheduleDto>(pipelinesString);
            SinglePipelineSchedule pipelineSchedule = await _pipelineScheduleMapper.MapSinglePipelineScheduleFromDtoToBusinessModel(projectId, pipelineScheduleDto);
            return pipelineSchedule;
        }
    }
}
