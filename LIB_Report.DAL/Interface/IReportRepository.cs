using LIB_Report.DAL.DTO;
using LIB_Report.DAL.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace LIB_Report.DAL.Repository
{
   public interface IReportRepository
    {
        List<Employee> GetEmpoyeeInformation(string empId);
        List<EmployeeWorkExperience> GetEmpoyeeWorkExperience(string empId);
        List<PreviousEmployeeWorkExperience> GetPreEmpoyeeWorkExperience(string empId);
        List<EmployeeDetail> GetEmpoyeeDetail(string empId);
        List<EmployeeEducation> GetEmpoyeeEducation(string empId);
        List<EmployeeTraining> GetEmployeeTraining(string empId);
        List<EmployeeLanguge> GetEmployeeLanguge(string empId);
        List<EmployeePerformanceRate> GetEmployeePerformance(string empId);
        List<EmployeeSalaryHistory> GetEmployeesalary(string empId);
        List<EmployeeFile> GetEmployeeFile(string empId);
    }
}
