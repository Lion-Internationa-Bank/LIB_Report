
using LIB_Report.DAL.Repository;
using LIB_Report.Infra.Data.Repository;
using LIB_Report.Application.Interfaces;
using LIB_Report.Application.Services;
using LIB_Report.DAL.Interface;
using LIB_Report.Infra.Data.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LIB_Report.UI.Infrastructure
{
    internal class RegisterAPIResources : IServiceRegistration
    {
        public void RegisterAppServices(IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<IReportRepository, ReportRepository>();

            services.AddScoped<ILoockUpService, LoockUpService>();
            services.AddScoped<ILoockUpRepository, LoockUpRepository>();
        }
    }
}
