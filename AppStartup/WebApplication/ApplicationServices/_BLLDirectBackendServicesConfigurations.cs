using Microsoft.Extensions.DependencyInjection;
using TamTechBackendSDK.ContentService.Services.Sections;
using TamTechSDK.Common.Services.ContentService;
using TamTechSDK.Common.Services.ContentService.Brands;
using TamTechSDK.Common.Services.ContentService.Categories;
using TamTechSDK.Common.Services.ContentService.Galleries;
using TamTechSDK.Common.Services.ContentService.Menus;
using TamTechSDK.Common.Services.ContentService.Pages;
using TamTechSDK.Common.Services.ContentService.Posts;
using TamTechSDK.Common.Services.ContentService.Products;

using TamTechSDK.Common.Services.ContentService.Reviews;
using TamTechSDK.Common.Services.ContentService.Sections;
using TamTechSDK.Common.Services.ContentService.Services;
using TamTechSDK.Common.Services.ContentService.Sliders;
using TamTechSDK.Common.Services.ContentService.Testimonials;
using TamTechSDK.Common.Services.Email;
using TamTechSDK.Common.Services.Identity;
using TamTechSDK.Common.Services.Upload;

namespace Gts.AppStartup.WebApplication.ApplicationServices
{
    public static class BLLDirectBackendServicesConfigurations
    {
        public static void _AddBusinessLogicDirectBackendServicesConfigurations(this IServiceCollection services)
        {
            #region Contents Service 

            services.AddScoped<IMenusServices, Gts.DirectBackendServices.ContentServices.Menus.DirectMenusServices>();
            services.AddTransient<ICategoriesServices, Gts.DirectBackendServices.ContentServices.Categories.DirectCategoriesServices>();
            services.AddTransient<IProductsManagerService, Gts.DirectBackendServices.ContentServices.Products.DirectProductsManagerService>();
            // services.AddTransient<IProductsService, Web.DirectBackendServices.ContentServices.Products.DirectProductsService> ();
            services.AddTransient<IBrandsServices, Gts.DirectBackendServices.ContentServices.Brands.DirectBrandsServices>();
            services.AddTransient<IPageService, Gts.DirectBackendServices.ContentServices.Pages.DirectPagesService>();
            services.AddTransient<IReviewsServices, Gts.DirectBackendServices.ContentServices.Reviews.DirectReviewsServices>();
            services.AddTransient<IServicesService, Gts.DirectBackendServices.ContentServices.Services.DirectServicesService>();
            services.AddTransient<IContentServices, Gts.DirectBackendServices.ContentServices.Content.DirectContentService>();
            services.AddTransient<ISlidersServices, Gts.DirectBackendServices.ContentServices.Sliders.DirectSlidersService>();
            services.AddTransient<IGalleriesService, Gts.DirectBackendServices.ContentServices.Galleries.DirectGalleriesService>();
            services.AddTransient<IPostsService, Gts.DirectBackendServices.ContentServices.Posts.DirectPostsService>();
            services.AddTransient<ISectionsService, Gts.DirectBackendServices.ContentServices.Sections.DirectSectionsService>();
            services.AddTransient<TamTechSDK.Common.Services.ContentService.Request.IRequestService, Gts.DirectBackendServices.ContentServices.Request.DirectRequestService>();
            services.AddTransient<TamTechSDK.Common.Services.ContentService.Status.IStatusService, Gts.DirectBackendServices.ContentServices.Status.DirectSatusService>();
            services.AddTransient<TamTechSDK.Common.Services.ContentService.City.ICityService, Gts.DirectBackendServices.ContentServices.City.DirectCityService>();
            services.AddTransient<ITestimonialsServices, Gts.DirectBackendServices.ContentServices.Testimonials.DirectTestimonialsServices>();
            #endregion

            #region Upload Service 

            services.AddTransient<IUploadService, Gts.DirectBackendServices.UploadService.DirectFileStorageService>();

            #endregion

            #region Email Service 

            services.AddTransient<IEmailSenderService, Gts.DirectBackendServices.EmailServices.DirectEmailServices>();

            #endregion

            #region Identity Service 

            services.AddTransient<IAuthService, Gts.DirectBackendServices.IdentityService.DirectAuthService>();
            services.AddTransient<IUsersManagerService, Gts.DirectBackendServices.IdentityService.UsersMenager.DirectUserMenagerServices>();
            services.AddTransient<IRolesService, Gts.DirectBackendServices.IdentityService.RolesService.DirectRolesService>();


            #endregion


        }
    }
}
