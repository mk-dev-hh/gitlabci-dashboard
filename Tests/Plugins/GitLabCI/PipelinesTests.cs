using System.Collections.Generic;
using dvelop.Plugins.GitLabCI;
using dvelop.Plugins.GitLabCI.Dto;
using NUnit.Framework;

namespace dvelop.Tests.UnitTests.Plugins.GitLabCI
{
    [TestFixture]
    public class PipelinesTests
    {
        private static IPipelineMapper _pipelineMapper;
        private static List<PipelineDto> _pipelineDtos;
        private static PipelineDto _pipelineDto;

        [SetUp]
        public static void SetUp()
        {
            _pipelineMapper = new PipelineMapper();
            _pipelineDtos = new List<PipelineDto>();
            _pipelineDto = new PipelineDto(){CreatedAt = "12.02.2020", Id = "12345", Ref = "abcdef",
                Sha = "abddc", Status = "success", UpdatedAt = "14.02.2020", WebUrl = "https://www.gitlab.com"};
            _pipelineDtos.Add(_pipelineDto);
        }

        [Test]
        public static void Test_MapPipelineDto_EqualsTrue()
        {
            var pipelineList = _pipelineMapper.MapFromDtoToBusinessModel(_pipelineDtos);
            Assert.AreEqual("12345", pipelineList[0].Id);
            Assert.AreEqual("12.02.2020", pipelineList[0].CreatedAt);
            Assert.AreEqual("abcdef", pipelineList[0].Ref);
            Assert.AreEqual("abddc", pipelineList[0].Sha);
            Assert.AreEqual("success", pipelineList[0].Status);
            Assert.AreEqual("14.02.2020", pipelineList[0].UpdatedAt);
            Assert.AreEqual("https://www.gitlab.com", pipelineList[0].WebUrl);
        }


    }
}
