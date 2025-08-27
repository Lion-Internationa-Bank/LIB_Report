using Microsoft.EntityFrameworkCore;
using LIB_Report.DAL.Entity;
namespace LIB_Report.DAL
{
    public class ReportDBContext: DbContext
    {
    
        public object HttpContext { get; internal set; }

        public virtual DbSet<LoanStatement> LoanStatement { get; set; }

        public ReportDBContext(DbContextOptions<ReportDBContext> options) : base(options)
        {
       
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<LoanStatement>().HasNoKey();

        }

    }
    }
 