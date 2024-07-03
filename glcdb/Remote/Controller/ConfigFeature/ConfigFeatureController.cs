using System.Collections.Generic;
using dvelop.Business.Provider;
using dvelop.Remote.Controller.Root;
using Dvelop.Sdk.Config.Dto;
using Microsoft.AspNetCore.Mvc;

namespace dvelop.Remote.Controller.ConfigFeature
{
    [Route("configfeatures")]
    public class ConfigFeaturesController : ControllerBase
    {
        private readonly IUserProvider _userRepo;

        public ConfigFeaturesController (IUserProvider userRepo)
        {
            _userRepo = userRepo;
        }

        [Route("", Name = nameof(ConfigFeaturesController)+"."+nameof(GetConfigFeatures))]
        [HttpGet]
        public ConfigFeatureDto GetConfigFeatures()
        {
            var configFeatureDto = new ConfigFeatureDto { AppName = RootController.APP_NAME };
            var customHeadlineDto = new CustomHeadlineDto
            {
                Caption = RootController.APP_NAME,
                Description = $"Hello {_userRepo.CurrentUser.DvDisplayName}, this is a running example of d.ecs documents apps"
            };

            //if (User.IsInRole(IdpConst.BUILT_IN_ADMIN_GROUP) || User.IsInRole(IdpConst.TENANT_ADMIN_GROUP))
            {
                customHeadlineDto.MenuItems.Add(new MenuItemDto
                {
                    Caption = "Configuration 1",
                    Description = "First configuration",
                    Href = Url.RouteUrl("", null)
                });
            }

            configFeatureDto.CustomHeadlines.Add(customHeadlineDto);
            return configFeatureDto;
        }
    }
}
