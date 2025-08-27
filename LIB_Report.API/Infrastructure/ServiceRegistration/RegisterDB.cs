using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Reflection;
 using Microsoft.EntityFrameworkCore;
using LIB_Report.DAL;
using LIB_Report.DAL.Contexts;

 namespace LIB_Report.UI.Infrastructure
{
    internal class RegisterDB : IServiceRegistration
    {
        public void RegisterAppServices(IServiceCollection services, IConfiguration config)
        {
            //string s = config["DataSource:connectionString"].ToString();

            //services.AddDbContext<ReportDBContext>(options =>
            //    options.UseOracle(config["DataSource:ConnectionString"], b => b.MigrationsAssembly("LIB_Report.API"))); 
            
            services.AddDbContext<HRDbContext>(options =>
                options.UseSqlServer(config["DataSource:HRConnectionString"], b => b.MigrationsAssembly("LIB_Report.API")));
         
           
        }
    }
}
