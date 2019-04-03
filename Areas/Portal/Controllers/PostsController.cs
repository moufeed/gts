using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;
using TamTechSDK.Common.Helpers.Converters;
using TamTechSDK.Common.Models.Pagination;
using TamTechSDK.Common.Services.ContentService.Menus;
using TamTechSDK.Common.Services.ContentService.Posts;
using TamTechSDK.Common.Services.ContentService.Posts.Models;
using TamTechSDK.Common.Services.ContentService.Sections;
using TamTechSDK.Common.Services.ContentService.Sections.Models;
using TamTechSDK.Common.Services.Upload;
using TamTechSDK.Web.Attributes;
using TamTechSDK.Web.Controllers.Portal;
using TamTechSDK.Web.Services.Configurations.Cultures;
using TamTechSDK.Web.Services.Telemetry;

namespace Gts.Areas.Portal.Controllers
{
    [ControllerName("products")]
    public class PostsController : PostsBaseController
    {
        private readonly ISectionsService _SectionsService;
        private readonly IPostsService _postservice;
        public PostsController(ITelemetryClientService telemetryClientService,
            IMenusServices menusServices,
            IPostsService postservice, ISectionsService SectionsService)
            : base(telemetryClientService, menusServices, postservice, SectionsService)
        {

            _SectionsService = SectionsService;
            _postservice = postservice;
        }
        public async override Task<IActionResult> Index(PaginationModel Pagination)
        {
            var section = await _SectionsService.GetPublicMainSectionsAsync();
            return View(section);
        }

        public async override Task<IActionResult> Section(PaginationModel Pagination, string slug)
        {
            try
            {

                ViewBag.slug = slug;
                var sectionContainer = await _SectionsService.GetPublicSectionWithLatestSubSectionsBySlugAsync(slug);

                if (sectionContainer == null || sectionContainer.SectionInfo == null)
                {
                    return NotFound();
                }

                // When there is no sectionInfo there can be no posts
                PostsList pagedPosts = sectionContainer?.SectionInfo != null ? await _postservice.GetPublicListBySectionSlugAsync(Pagination, slug) : new PostsList();

                SectionContainerDto model = new SectionContainerDto
                {
                    Sections = sectionContainer.Sections,
                    SectionInfo = sectionContainer.SectionInfo,
                    Posts = pagedPosts.Data,
                    Pagination = pagedPosts.Pagination,
                    SectionsSlugs = sectionContainer.SectionInfo.Slugs
                };

                return View("Section", model);
            }
            catch (Exception ex)
            {
                TrackException(ex);
            }
            return StatusCode(500);
        }
    }
}