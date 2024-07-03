using System.Globalization;
using System.Resources;
using dvelop.Business.ExceptionService.Model;
using dvelop.Business.TranslationService;
using Moq;
using NUnit.Framework;

namespace dvelop.Tests.UnitTests.Business.TranslationService
{
    [TestFixture]
    public class TranslationServiceTest
    {
        private static Mock<ITranslationProvider> _mockedTranslationProvider;
        private static Mock<ILanguageProvider> _mockedLanguageProvider;
        private static ITranslationService _translationService;

        [SetUp]
        public static void SetUp()
        {
            _mockedTranslationProvider = new Mock<ITranslationProvider>();
            _mockedLanguageProvider = new Mock<ILanguageProvider>();
            _translationService = new dvelop.Business.TranslationService.TranslationService(_mockedTranslationProvider.Object, _mockedLanguageProvider.Object);
        }

        [Test]
        public void Get_WithOutParameter()
        {
            const string STRING = "Ein Text";
            const string ID = "ID";

            _mockedTranslationProvider
                .Setup(tp => tp.Get(It.IsAny<CultureInfo>(), ID))
                .Returns(STRING);
            _mockedLanguageProvider
                .Setup(lp => lp.Language)
                .Returns(CultureInfo.CurrentCulture);

            string result = _translationService.Get(ID);

            Assert.AreEqual(STRING, result);
        }

        [Test]
        public void Get_WithParameter()
        {
            const string STRING = "Ein Text {0}";
            const string PARAMETER = "Parameter";
            const string EXPECTED = "Ein Text Parameter";
            const string ID = "ID";

            _mockedTranslationProvider
                .Setup(tp => tp.Get(It.IsAny<CultureInfo>(), ID))
                .Returns(STRING);
            _mockedLanguageProvider
                .Setup(lp => lp.Language)
                .Returns(CultureInfo.CurrentCulture);

            string result = _translationService.Get(ID, PARAMETER);

            Assert.AreEqual(EXPECTED, result);
        }

        [Test]
        public void Get_Exception()
        {
            const string ID = "ID";

            _mockedTranslationProvider
                .Setup(tp => tp.Get(It.IsAny<CultureInfo>(), ID))
                .Throws(new MissingManifestResourceException());
            _mockedLanguageProvider
                .Setup(lp => lp.Language)
                .Returns(CultureInfo.CurrentCulture);

            Assert.Throws<PrivateAppException>(() => _translationService.Get(ID));
        }
    }
}
