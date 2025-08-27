using System;
using AutoMapper;
using LIB_Report.UI.Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using LIB_Report.DAL;
using System.IO;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.Http;
using AutoWrapper;
using DevExpress.AspNetCore;
using DevExpress.XtraReports.Web.Extensions;
using LIB_Report.API;
using System.Linq;
using DevExpress.XtraReports.Services;
using DevExpress.XtraReports.Web.ReportDesigner.Services;
using DevExpress.AspNetCore.Reporting;
using LIB_Report.Infra.Data;
using LIB_Report.Report.Services;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using LIB_Report.DAL.Contexts;
using Microsoft.AspNetCore.Rewrite;

namespace LIB_Report.UI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {


            services.AddServicesInAssembly(Configuration);
           // services.AddApiVersioning();
            services.AddDevExpressControls();
            services.AddMvcCore()
                  .AddNewtonsoftJson(options =>
                  {
                      options.UseMemberCasing();
                      options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                  });

            services.AddMvc().ConfigureApplicationPartManager(x => {
                var parts = x.ApplicationParts;
                var aspNetCoreReportingAssemblyName = typeof(DevExpress.AspNetCore.Reporting.WebDocumentViewer.WebDocumentViewerController).Assembly.GetName().Name;
                var reportingPart = parts.FirstOrDefault(part => part.Name == aspNetCoreReportingAssemblyName);
                if (reportingPart != null)
                {
                    parts.Remove(reportingPart);
                }
            });

            services.AddAutoMapper(typeof(Startup));
            services.AddControllers().AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null).SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
            services.AddHttpContextAccessor();
            //AutoWrapper Exception Settings
            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.SuppressModelStateInvalidFilter = true;

            });

            // devexpres Reporting 
            services.AddScoped<ReportStorageWebExtension, CustomReportStorageWebExtension>();
            services.AddScoped<IReportProvider, CustomReportProvider>();
            services.AddScoped<IObjectDataSourceInjector, ObjectDataSourceInjector>();
            services.AddSingleton<IScopedDbContextProvider<HRDbContext>, ScopedDbContextProvider<HRDbContext>>();
            services.AddMemoryCache();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IConfiguration config,
              IServiceProvider _serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.Use(async (context, next) =>
                {
                    await next();
                    if (context.Response.StatusCode == 404 &&
                       !Path.HasExtension(context.Request.Path.Value) &&
                       !context.Request.Path.Value.StartsWith("/api/"))
                    {
                        context.Request.Path = "/index.html";
                        await next();
                    }
                    else
                    {
                        context.Request.Path = "index.html";
                        await next();
                    }
                });

            }



            //Enable Swagger and SwaggerUI
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "LIB Report Web Services V 1.0");
            });
            //AutoWrapper
            app.UseApiResponseAndExceptionWrapper(new AutoWrapperOptions
            {
                IgnoreWrapForOkRequests = true,
                IsDebug = true,
                EnableResponseLogging = false,
                EnableExceptionLogging = false,
                UseApiProblemDetailsException = true,
                IsApiOnly = false
            });

            app.UseRouting();

            //Enable CORS
            app.UseCors("CorsPolicy");

            app.UseFileServer();
            




            //app.UseStaticFiles(new StaticFileOptions()
            //{
            //    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Uploads")),
            //    RequestPath = new PathString("/Uploads")
            //});
            app.UseHttpsRedirection();
            app.UseDevExpressControls();

            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            Initialize(app.ApplicationServices);
        }
        private static void Initialize(IServiceProvider service)
        {
            using (var serviceScope = service.CreateScope())
            {

                var scopeServiceProvider = serviceScope.ServiceProvider;
                var db = scopeServiceProvider.GetService<ReportDBContext>();

            }
        }
       
    }
}