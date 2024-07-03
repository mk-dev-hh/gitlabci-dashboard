using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using dvelop.Business.PipelineService;
using dvelop.Business.PipelineService.Model;
using dvelop.Plugins.GitLabCI.Dto;
using Newtonsoft.Json;

namespace dvelop.Plugins.GitLabCI
{
    public class PipelineProvider : IPipelineProvider
    {
       // private readonly TenantHttpClient _tenantHttpClient;
        private HttpClient _httpClient;
        private readonly IPipelineMapper _pipelineMapper;
        private string gitlabciBaseUri = "https://git.d-velop.de/api/v4/projects/";

        public PipelineProvider(/*TenantHttpClient tenantHttpClient*/ IPipelineMapper pipelineMapper)
        {
            /*_tenantHttpClient = tenantHttpClient;*/
            _pipelineMapper = pipelineMapper;
            _httpClient = new HttpClient();
            _httpClient.DefaultRequestHeaders.Accept.Clear();
            _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }

        public async Task<List<Pipeline>> GetPipelinesAsync(string projectId)
        {
            var projectUri = this.gitlabciBaseUri + projectId;
            var baseUri = new Uri(projectUri);
            var uri = new Uri(baseUri, "/api/v4/projects/"+ projectId +"/pipelines?private_token=5HrUzhmxPAKZfcmg-ZP-&per_page=100");
            HttpResponseMessage responseMessage = await _httpClient.GetAsync(uri);

            if (!responseMessage.IsSuccessStatusCode)
            {
                return null;
            }

            string pipelinesString = await responseMessage.Content.ReadAsStringAsync();
            var pipelinesDto = JsonConvert.DeserializeObject<List<PipelineDto>>(pipelinesString);
            List<Pipeline> pipelines = _pipelineMapper.MapFromDtoToBusinessModel(pipelinesDto);
            return pipelines;
        }

        public async Task<SinglePipeline> GetPipelineAsync(string projectId, string pipelineId)
        {
            var projectUri = this.gitlabciBaseUri + projectId;
            var baseUri = new Uri(projectUri);
            var uri = new Uri(baseUri, "/api/v4/projects/"+ projectId + "/pipelines/" + pipelineId + "?private_token=5HrUzhmxPAKZfcmg-ZP-");
            HttpResponseMessage responseMessage = await _httpClient.GetAsync(uri);
            if (!responseMessage.IsSuccessStatusCode)
            {
                return null;
            }

            string pipelinesString = await responseMessage.Content.ReadAsStringAsync();
            var pipeline = JsonConvert.DeserializeObject<SinglePipelineDto>(pipelinesString);
            SinglePipeline singlePipeline = new SinglePipeline();
            singlePipeline = _pipelineMapper.MapFromSingleDtoToBusinessModel(pipeline);
            return singlePipeline;
        }

        public async Task<PipelineTriggerUserInfo> GetPipelineTriggerUserInfoAsync(string projectId, string pipelineId)
        {
            var projectUri = this.gitlabciBaseUri + projectId;
            var baseUri = new Uri(projectUri);
            var uri = new Uri(baseUri, "/api/v4/projects/"+ projectId + "/pipelines/" + pipelineId + "?private_token=5HrUzhmxPAKZfcmg-ZP-");
            HttpResponseMessage responseMessage = await _httpClient.GetAsync(uri);

            if (!responseMessage.IsSuccessStatusCode)
            {
                return null;
            }

            string pipelinesString = await responseMessage.Content.ReadAsStringAsync();
            var pipelineTriggerUserInfoDto = JsonConvert.DeserializeObject<PipelineTriggerUserInfoDto>(pipelinesString);
            var pipelineTriggerUserInfo = _pipelineMapper.MapFromDtoToBusinessModel(pipelineTriggerUserInfoDto);
            return pipelineTriggerUserInfo;
        }

        public async Task<List<Pipeline>> GetPipelinesByBranchNameAsync(string projectId, string branchName)
        {
            var projectUri = this.gitlabciBaseUri + projectId;
            var baseUri = new Uri(projectUri);
            if (branchName.Contains("22F"))
                branchName = branchName.Replace("22F", "/");
            var uri = new Uri(baseUri, "/api/v4/projects/"+ projectId + "/pipelines?private_token=5HrUzhmxPAKZfcmg-ZP-&per_page=100&ref=" + branchName);
            HttpResponseMessage responseMessage = await _httpClient.GetAsync(uri);

            if (!responseMessage.IsSuccessStatusCode)
            {
                return null;
            }

            string pipelinesString = await responseMessage.Content.ReadAsStringAsync();
            var pipelinesDto = JsonConvert.DeserializeObject<List<PipelineDto>>(pipelinesString);
            List<Pipeline> pipelines = _pipelineMapper.MapFromDtoToBusinessModel(pipelinesDto);
            return pipelines;
        }
    }
}
