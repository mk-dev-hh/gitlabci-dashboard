using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.ConfigurationService;
using dvelop.Business.ProjectService;
using dvelop.Business.ProjectService.Model;
using Moq;
using NUnit.Framework;

namespace dvelop.Tests.UnitTests.Business.ProjectService
{
    [TestFixture]
    public class ProjectServiceTest
    {
        private static Mock<IProjectProvider> _mockedProjectProvider;
        private static Mock<IConfigurationService> _mockedConfigurationService;
        private static IProjectService _pipelineSchedulesService;

        [SetUp]
        public static void SetUp()
        {
            _mockedProjectProvider = new Mock<IProjectProvider>();
            _mockedConfigurationService = new Mock<IConfigurationService>();
            _pipelineSchedulesService = new dvelop.Business.ProjectService.ProjectService(_mockedProjectProvider.Object, _mockedConfigurationService.Object);
        }


        [Test]
        public static async Task Test_GetPipelineList_ListNotNull()
        {
            var expected = new List<Project>();
            _mockedProjectProvider
                .Setup(pipelineSchedulesProvider => pipelineSchedulesProvider.GetAllImportantProjectsAsync())
                .ReturnsAsync(expected);
            List<Project> projectsList = await _pipelineSchedulesService.GetAllImportantProjectsAsync();
            Assert.AreEqual(expected, projectsList);
            Assert.AreEqual(expected.Count, projectsList.Count);
        }
    }
}
