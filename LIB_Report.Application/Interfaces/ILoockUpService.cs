using System;
using System.Collections.Generic;
using System.Text;
using LIB_Report.DAL.Entity;
using System.Threading.Tasks;
using LIB_Report.DAL.DTO;

namespace LIB_Report.Application.Interfaces
{
    public interface ILoockUpService
    {
        Task<List<BusinessUnit>> GetBusinessUnit(int CategoryTYpe);
        Task<List<JobsTitle>> GetJobsTitle();

        Task<List<Employee>> SearchEmployee(SearchEmployeeParameters param);

    }
}
