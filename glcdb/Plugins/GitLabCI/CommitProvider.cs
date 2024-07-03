using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using dvelop.Business.CommitService;
using dvelop.Business.CommitService.Model;
using dvelop.Plugins.GitLabCI.Dto;
using dvelop.Plugins.WebApi.HttpClients;
using Newtonsoft.Json;

namespace dvelop.Plugins.GitLabCI
{
    public class CommitProvider : ICommitProvider
    {
        private readonly TenantHttpClient _tenantHttpClient;
        private readonly HttpClient _httpClient;
        private readonly ICommitMapper _commitMapper;
        private string gitlabciBaseUri = "https://git.d-velop.de/api/v4/projects/";

        public CommitProvider(TenantHttpClient tenantHttpClient, ICommitMapper commitMapper)
        {
            _tenantHttpClient = tenantHttpClient;
            _commitMapper = commitMapper;
            _httpClient = new HttpClient();
            _httpClient.DefaultRequestHeaders.Accept.Clear();
            _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }

        public async Task<List<Commit>> GetCommitsAsync(string projectId)
        {
            this.gitlabciBaseUri += projectId;
            var baseUri = new Uri(this.gitlabciBaseUri);
            var uri = new Uri(baseUri, "/api/v4/projects/"+ projectId +"/repository/commits?private_token=5HrUzhmxPAKZfcmg-ZP-");
            HttpResponseMessage responseMessage = await _httpClient.GetAsync(uri);

            if (!responseMessage.IsSuccessStatusCode)
            {
                return null;
            }

            string commitsString = await responseMessage.Content.ReadAsStringAsync();
            var commitsDto = JsonConvert.DeserializeObject<List<CommitDto>>(commitsString);
            List<Commit> commits = new List<Commit>();
            foreach (CommitDto commitDto in commitsDto)
            {
                commits.Add(_commitMapper.MapFromDtoToBusinessModel(commitDto));
            }
            return commits;
        }

        public async Task<Commit> GetCommitAsync(string projectId, string commitId)
        {
            this.gitlabciBaseUri += projectId;
            var baseUri = new Uri(this.gitlabciBaseUri);
            var uri = new Uri(baseUri, "/api/v4/projects/"+ projectId +"/repository/commits/" + commitId + "?private_token=5HrUzhmxPAKZfcmg-ZP-");
            HttpResponseMessage responseMessage = await _httpClient.GetAsync(uri);
            if (!responseMessage.IsSuccessStatusCode)
            {
                return null;
            }

            string commitString = await responseMessage.Content.ReadAsStringAsync();
            var commit = JsonConvert.DeserializeObject<Commit>(commitString);
            return commit;
        }
    }
}
