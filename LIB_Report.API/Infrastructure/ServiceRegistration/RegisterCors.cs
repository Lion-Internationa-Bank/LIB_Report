using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;


namespace LIB_Report.UI.Infrastructure
{
    internal class RegisterCors : IServiceRegistration
    {
        public void RegisterAppServices(IServiceCollection services, IConfiguration config)
        {

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                          builder =>
                           builder.WithOrigins($"http://10.1.10.43", $"http://10.1.10.43:9091")
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                         .AllowCredentials());

            });

        }
    }
}
 