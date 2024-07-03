using System.Collections.Generic;
using System.Threading.Tasks;
using dvelop.Business.BranchService;
using dvelop.Business.BranchService.Model;
using Moq;
using NUnit.Framework;

namespace dvelop.Tests.UnitTests.Business.BranchService
{
    [TestFixture]
    public class BranchServiceTest
    {

        private static Mock<IBranchProvider> _mockedBranchProvider;
        private static IBranchService _branchService;

        [SetUp]
        public static void SetUp()
        {
            _mockedBranchProvider = new Mock<IBranchProvider>();
            _branchService = new dvelop.Business.BranchService.BranchService(_mockedBranchProvider.Object);
        }


        [Test]
        public static async Task Test_GetPipelineList_ListNotNull()
        {
            var expected = new List<Branch>();
            _mockedBranchProvider
                .Setup(branchProvider => branchProvider.GetBranchesAsync("3335"))
                .ReturnsAsync(expected);
            List<Branch> branchesList = await _branchService.GetBranchesAsync("3335");
            Assert.AreEqual(expected, branchesList);
        }
    }
}
