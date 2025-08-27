using System;
using System.Collections.Generic;
using System.Text;
using LIB_Report.DAL.Entity;
using Microsoft.EntityFrameworkCore;

namespace LIB_Report.DAL.Contexts
{
    public class HRDbContext : DbContext
    {
        public HRDbContext(DbContextOptions<HRDbContext> options) : base(options)
        {
        }

        public DbSet<Employee> EmployeeInfo { get; set; }
        public DbSet<EmployeeDetail> EmployeeDetail { get; set; }
        public DbSet<EmployeeWorkExperience> EmployeeWorkExperience { get; set; }
        public DbSet<PreviousEmployeeWorkExperience> PreviousEmployeeWorkExperience { get; set; }
        public DbSet<EmployeeEducation> EmployeeEducation { get; set; }
        public DbSet<EmployeeTraining> EmployeeTraining { get; set; }
        public DbSet<EmployeeLanguge> EmployeeLanguge { get; set; }
        public DbSet<EmployeePerformanceRate> EmployeePerformanceRate { get; set; }
        public DbSet<EmployeeSalaryHistory> EmployeeSalaryHistory { get; set; }
        public DbSet<BusinessUnit> BusinessUnit { get; set; }
        public DbSet<EmployeeFile> EmployeeFile { get; set; }
        public DbSet<JobsTitle> JobsTitle { get; set; }
        public DbSet<EmplAct> EmplAct { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<EmployeeWorkExperience>().HasNoKey();
            builder.Entity<EmployeeDetail>().HasNoKey();
            builder.Entity<PreviousEmployeeWorkExperience>().HasNoKey();
            builder.Entity<EmployeeEducation>().HasNoKey();
            builder.Entity<EmployeeTraining>().HasNoKey();
            builder.Entity<EmployeeLanguge>().HasNoKey();
            builder.Entity<EmployeePerformanceRate>().HasNoKey();
            builder.Entity<EmployeeSalaryHistory>().HasNoKey();
            builder.Entity<EmployeeFile>().HasNoKey();
            builder.Entity<EmplAct>().HasNoKey();

        }
    }
}