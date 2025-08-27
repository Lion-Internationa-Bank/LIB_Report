using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LIB_Report.DAL.DTO;
using LIB_Report.Infra.Data;
using LIB_Report.DAL.Contexts;
using LIB_Report.DAL.Entity;
using LIB_Report.DAL.Interface;
using Microsoft.EntityFrameworkCore;

namespace LIB_Report.Infra.Data.Repository
{
    public class LoockUpRepository: ILoockUpRepository
    {
        private HRDbContext _dbContext;
        public LoockUpRepository(HRDbContext dbContext) {
            _dbContext = dbContext;
        }

        public async Task<List<BusinessUnit>> GetBusinessUnit(int CategoryTYpe)
        {
            return await _dbContext.BusinessUnit.Where(p=>p.BusCat == CategoryTYpe).OrderBy(p=>p.UnitName).ToListAsync();
        }

        public async Task<List<JobsTitle>> GetJobsTitle()
        {
            return await _dbContext.JobsTitle.OrderBy(p => p.JobTitle).ToListAsync();
        }    
        
        public async Task<List<Employee>> SearchEmployee(SearchEmployeeParameters param)
        {
            return await _dbContext.EmployeeInfo.Where(p => 
            (p.UnitID== param.Unit || param.Unit ==null) &&
            (p.JobID==param.JobTitle || param.JobTitle ==null) &&
            (p.Gender == param.Gender || param.Gender == null) &&
            (p.Status == param.Status || param.Status == null) &&
            (p.DateJoined >= param.EmployementDateFrom || param.EmployementDateFrom == new DateTime()) &&
            (p.DateJoined <= param.EmployementDateTo || param.EmployementDateTo == new DateTime())).ToListAsync();
        }
    }
}
