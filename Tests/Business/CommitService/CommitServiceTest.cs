using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.CommitService;
using dvelop.Business.CommitService.Model;
using Moq;
using NUnit.Framework;

namespace dvelop.Tests.UnitTests.Business.CommitService
{
    [TestFixture]
    public class CommitServiceTest
    {

        private static Mock<ICommitProvider> _mockedCommitProvider;
        private static ICommitService _commitService;

        [SetUp]
        public static void SetUp()
        {
            _mockedCommitProvider = new Mock<ICommitProvider>();
            _commitService = new dvelop.Business.CommitService.CommitService(_mockedCommitProvider.Object);
        }


        [Test]
        public static async Task Test_GetCommitList_ListNotNull()
        {
            var expected = new List<Commit>();
            _mockedCommitProvider
                .Setup(commitProvider => commitProvider.GetCommitsAsync("master"))
                .ReturnsAsync(expected);
            List<Commit> pipelineList = await _commitService.GetCommitsAsync("master");
            Assert.AreEqual(expected, pipelineList);
        }
    }
}
