using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using LIB_Report.DAL.DTO;
using LIB_Report.Application.Interfaces;
using LIB_Report.DAL.Entity;
using LIB_Report.DAL.Interface;

namespace LIB_Report.Application.Services
{
    public class LoockUpService : ILoockUpService
    {
        private readonly ILoockUpRepository _loockUpRepository;
        public LoockUpService(ILoockUpRepository loockUpRepository)
        {
            _loockUpRepository = loockUpRepository;
        }
        public async Task<List<BusinessUnit>> GetBusinessUnit(int CategoryTYpe)
        {
            try
            {
                return await _loockUpRepository.GetBusinessUnit(CategoryTYpe);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<JobsTitle>> GetJobsTitle()
        {
            try
            {
                return await _loockUpRepository.GetJobsTitle();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<Employee>> SearchEmployee(SearchEmployeeParameters param)
        {
            try
            {
                return await _loockUpRepository.SearchEmployee(param);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
