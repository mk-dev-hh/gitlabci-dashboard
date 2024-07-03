using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.PipelineSchedulesService;
using dvelop.Business.PipelineSchedulesService.Model;
using Moq;
using NUnit.Framework;

namespace dvelop.Tests.UnitTests.Business.PipelineSchedulesService
{
    [TestFixture]
    public class PipelineSchedulesServiceTest
    {
        private static Mock<IPipelineSchedulesProvider> _mockedPipelineSchedulesProvider;
        private static IPipelineSchedulesService _pipelineSchedulesService;

        [SetUp]
        public static void SetUp()
        {
            _mockedPipelineSchedulesProvider = new Mock<IPipelineSchedulesProvider>();
            _pipelineSchedulesService = new dvelop.Business.PipelineSchedulesService.PipelineSchedulesService(_mockedPipelineSchedulesProvider.Object);
        }


        [Test]
        public static async Task Test_GetPipelineList_ListNotNull()
        {
            var expected = new List<SinglePipelineSchedule>();
            _mockedPipelineSchedulesProvider
                .Setup(pipelineSchedulesProvider => pipelineSchedulesProvider.GetPipelineSchedulesByProjectIdAsync("3335"))
                .ReturnsAsync(expected);
            List<SinglePipelineSchedule> pipelineSchedulesList = await _pipelineSchedulesService.GetPipelineSchedulesByProjectIdAsync("3335");
            Assert.AreEqual(expected, pipelineSchedulesList);
            Assert.AreEqual(expected.Count, pipelineSchedulesList.Count);
        }

    }
}
