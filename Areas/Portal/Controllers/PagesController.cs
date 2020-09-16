using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Localization;
using System.Collections.Generic;
using System.Threading.Tasks;
using TamTechSDK.Common.Models.Pagination;
using TamTechSDK.Common.Models.Sort;
using TamTechSDK.Common.Services.ContentService.Menus;
using TamTechSDK.Common.Services.ContentService.Pages;
using TamTechSDK.Web;
using TamTechSDK.Web.Controllers.Portal;
using TamTechSDK.Web.Models.Shared.Filters;
using TamTechSDK.Web.Services.Telemetry;

namespace Gts.Areas.Portal.Controllers
{
    public class PagesController : PagesBaseController
    {
        private IPageService _pageService;

        public PagesController(ITelemetryClientService telemetryClientService, IPageService pageService, IMenusServices menusServices)
            : base(telemetryClientService, pageService, menusServices)
        {
            _pageService = pageService;
        }

        
        public override async Task<IActionResult> Index()
        {
            Dictionary<string, object> searchParams = new Dictionary<string, object>();
            searchParams.Add("Section", "news");
            SortingModel sorting = new SortingModel();
            PaginationModel pagination = new PaginationModel
            {
                PageNumber = "1",
                PageSize = 75
            };

            var result = await _pageService.GetAllAsync(pagination, searchParams, sorting, _culture);

            if (result.Success)
            {
                return View(result.Data.Data);

            }
            return View();
        }
    }
}