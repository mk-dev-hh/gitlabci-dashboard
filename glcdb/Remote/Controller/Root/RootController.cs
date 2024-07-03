using dvelop.Business.VersionService;
using dvelop.Remote.Controller.ConfigFeature;
using dvelop.Remote.Controller.HomeFeature;
using dvelop.Remote.Controller.Root.Dto;
using dvelop.Remote.Views.Root;
using Dvelop.Sdk.Base.Dto;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace dvelop.Remote.Controller.Root
{
    [Route("")]
    public class RootController: Microsoft.AspNetCore.Mvc.Controller
    {
        public const string APP_NAME = "d.velop gitlabcidashboard";

        private readonly IVersionService _versionService;

        public RootController(IVersionService versionService)
        {
            _versionService = versionService;
        }

        [AllowAnonymous]
        [Produces("application/json","application/hal+json")]
        [HttpGet(Name = nameof(RootController)+"."+nameof(GetJson))]
        public RootDto GetJson()
        {
            SemVer version = _versionService.Version;
            var versionDto = new RootDto
            {
                Major = version.Major,
                Minor = version.Minor,
                Patch = version.Patch,
                Qualifier = version.Qualifier
            };

            versionDto._links.Add("configfeatures", new RelationDataDto(Url.RouteUrl(nameof(ConfigFeaturesController)+"."+nameof(ConfigFeaturesController.GetConfigFeatures), null)));
            versionDto._links.Add("featuresdescription", new RelationDataDto(Url.RouteUrl(nameof(HomeFeatureController)+"."+nameof(HomeFeatureController.GetFeaturesDescriptions))));
            return versionDto;
        }

        [AllowAnonymous]
        [Produces("text/html")]
        [HttpGet("/", Name = nameof(RootController)+"."+nameof(GetRootView))]
        public ActionResult GetRootView()
        {
            SemVer version = _versionService.Version;
            var model = new RootModel
            {
               Version = version.ToString()
            };
            return View("Root", model);
        }

        [Produces("text/html")]
        [HttpGet("{*url}", Name = nameof(RootController) + "." + nameof(GetAngular))]
        public ActionResult GetAngular()
        {
            ViewResult view = View("Angular");
            return view;
        }
    }
}
