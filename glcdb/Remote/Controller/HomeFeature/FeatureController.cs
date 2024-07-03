using dvelop.Remote.Controller.Root;
using Dvelop.Sdk.Home.Dto;
using Microsoft.AspNetCore.Mvc;

namespace dvelop.Remote.Controller.HomeFeature
{
    [Route("features")]
    public class HomeFeatureController : ControllerBase
    {
        [Route("description", Name = nameof(HomeFeatureController)+"."+nameof(GetFeaturesDescriptions))]
        [HttpGet]
        public FeatureDescriptionDto GetFeaturesDescriptions()
        {
            return BuildFeatureDescriptionDto();
        }

        private FeatureDescriptionDto BuildFeatureDescriptionDto()
        {
            var featureListDto = new FeatureDescriptionDto();

            FeatureDto feature = BuildFeatureDto();
            featureListDto.Features.Add(feature);

            return featureListDto;
        }

        private FeatureDto BuildFeatureDto()
        {
            var feature = new FeatureDto
            {
                Title = RootController.APP_NAME,
                SubTitle = "Example of d.velop documents apps",
                Summary = "Extend the d.velop cloud platform",
                Url = "/gitlabcidashboard/dashboard",
                Color = "pumpkin",
                Icon = "dv-tags",
                Description = "Learn to create a d.velop documents application for extending the d.velop cloud platform."
            };
            return feature;
        }
    }
}
