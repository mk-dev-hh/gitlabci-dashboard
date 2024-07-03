using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.PipelineService;
using dvelop.Business.PipelineService.Model;
using Moq;
using NUnit;
using NUnit.Framework;

namespace dvelop.Tests.UnitTests.Business.PipelineService
{
    [TestFixture]
    public class PipelineServiceTest
    {

        private static Mock<IPipelineProvider> _mockedPipelineprovider;
        private static IPipelineService _pipelineService;

        [SetUp]
        public static void SetUp()
        {
            _mockedPipelineprovider = new Mock<IPipelineProvider>();
            _pipelineService = new dvelop.Business.PipelineService.PipelineService(_mockedPipelineprovider.Object);
        }


        [Test]
        public static async Task Test_GetPipelineList_ListNotNull()
        {
            var expected = new List<Pipeline>();
            _mockedPipelineprovider
                .Setup(pipelineProvider => pipelineProvider.GetPipelinesAsync("3335"))
                .ReturnsAsync(expected);
            List<Pipeline> pipelineList = await _pipelineService.GetPipelinesAsync("3335");
            Assert.AreEqual(expected, pipelineList);
        }
    }
}
