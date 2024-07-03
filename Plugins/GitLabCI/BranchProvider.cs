using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using dvelop.Business.BranchService;
using dvelop.Business.BranchService.Model;
using dvelop.Business.PipelineService.Model;
using dvelop.Plugins.GitLabCI.Dto;
using dvelop.Plugins.WebApi.HttpClients;
using Newtonsoft.Json;

namespace dvelop.Plugins.GitLabCI
{
    public class BranchProvider : IBranchProvider
    {
        private readonly TenantHttpClient _tenantHttpClient;
        private HttpClient _httpClient;
        private readonly IBranchMapper _branchMapper;
        private string gitlabciBaseUri = "https://git.d-velop.de/api/v4/projects/";

        public BranchProvider(TenantHttpClient tenantHttpClient, IBranchMapper branchMapper)
        {
            _tenantHttpClient = tenantHttpClient;
            _branchMapper = branchMapper;
            _httpClient = new HttpClient();
            _httpClient.DefaultRequestHeaders.Accept.Clear();
            _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }

        public async Task<List<Branch>> GetBranchesAsync(string projectId)
        {
            this.gitlabciBaseUri += projectId;
            var baseUri = new Uri(this.gitlabciBaseUri);
            var uri = new Uri(baseUri, "/api/v4/projects/"+ projectId +"/repository/branches?private_token=5HrUzhmxPAKZfcmg-ZP-");
            HttpResponseMessage responseMessage = await _httpClient.GetAsync(uri);

            if (!responseMessage.IsSuccessStatusCode)
            {
                return null;
            }

            string branchesString = await responseMessage.Content.ReadAsStringAsync();
            var branchesDto = JsonConvert.DeserializeObject<List<BranchDto>>(branchesString);
            List<Branch> branches = _branchMapper.MapFromDtoToBusinessModel(branchesDto);
            return branches;
        }

        public async Task<Branch> GetBranchAsync(string projectId, string branchName)
        {
            this.gitlabciBaseUri += projectId;
            var baseUri = new Uri(this.gitlabciBaseUri);
            var uri = new Uri(baseUri, "/api/v4/projects/"+ projectId +"/repository/branches/" + branchName + "?private_token=5HrUzhmxPAKZfcmg-ZP-");
            HttpResponseMessage responseMessage = await _httpClient.GetAsync(uri);
            if (!responseMessage.IsSuccessStatusCode)
            {
                return null;
            }

            string branchString = await responseMessage.Content.ReadAsStringAsync();
            var branch = JsonConvert.DeserializeObject<Branch>(branchString);
            return branch;
        }
    }
}
