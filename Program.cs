using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using TamTechSDK.Common.Services.ContentService.Menus;

namespace Gts
{
    public class Program
    {

        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
             WebHost.CreateDefaultBuilder(args)
                 .UseApplicationInsights()
                 .UseKestrel()
                 .UseIISIntegration()
                 .UseStartup<Startup>();
                 // .UseUrls("http://192.168.1.28:5050");


    }
}
