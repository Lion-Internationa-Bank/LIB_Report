using LIB_Report.DAL.Repository;
using LIB_Report.DAL.Contexts;
using LIB_Report.DAL.Entity;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace LIB_Report.Infra.Data.Repository
{
    public class ReportRepository : IReportRepository
    {
        private IScopedDbContextProvider<HRDbContext> _reportDBContext;

        public ReportRepository(IScopedDbContextProvider<HRDbContext> reportDBContext)
        {
            _reportDBContext = reportDBContext;
        }

        public ReportRepository()
        {
        }

        public List<Employee>  GetEmpoyeeInformation(string empId)
        {
            using (var dbContextScope = _reportDBContext.GetDbContextScope())
            {
                return dbContextScope.DbContext.EmployeeInfo.Where(x => x.EmplID == empId).ToList();
            }
        }

        public List<EmployeeWorkExperience> GetEmpoyeeWorkExperience(string empId)
        {
            using (var dbContextScope = _reportDBContext.GetDbContextScope())
            {
               var empAct = dbContextScope.DbContext.EmplAct.Where(x => x.EmplID == empId).OrderByDescending(p => p.FromDT).ToList();
                var empExp = dbContextScope.DbContext.EmployeeWorkExperience.Where(x => x.EmplID == empId).OrderByDescending(p => p.FromDT).ToList();
                 List<EmployeeWorkExperience> empExpAct = new List<EmployeeWorkExperience>();
                foreach (var emp in empAct)
                {   
                    EmployeeWorkExperience empWork = new EmployeeWorkExperience();
                    empWork.EmplID = emp.EmplID ;
                    empWork.PlacAssg = emp.UnitName;
                    empWork.PosTitle = emp.PosTitle + " (Acting)";
                    empWork.FromDT = emp.FromDT;
                    empWork.ToDT = emp.ToDT;
                    empExpAct.Add(empWork);
                }
                empExp.AddRange(empExpAct);
                return empExp;
            }
        }

        public List<PreviousEmployeeWorkExperience> GetPreEmpoyeeWorkExperience(string empId)
        {
            using (var dbContextScope = _reportDBContext.GetDbContextScope())
            {
                return dbContextScope.DbContext.PreviousEmployeeWorkExperience.Where(x => x.EmplID == empId).OrderByDescending(p=>p.FromDT).ToList();
            }
        }

        public List<EmployeeDetail> GetEmpoyeeDetail(string empId)
        {
            using (var dbContextScope = _reportDBContext.GetDbContextScope())
            {
                var empIdvalue = new SqlParameter("@empId", empId);
                var EmployeeDetails = dbContextScope.DbContext.EmployeeDetail.FromSqlRaw(@"select FirstName+' '+FatherName+' '+GFatherName as Fullname,
                                            Empls.EmplID, Gender, Jobs.JobTitle, BusUnits.UnitName, JobPositions.PosTitle, 
                                            EthnGroup.EthnName as EthnID, TIN_No, MobileNo,case when MaritalStatus=0 then 'Single' when MaritalStatus=1 then 'Married'
											when MaritalStatus=2 then 'Widowed' when MaritalStatus=3 then 'Divorced' end as MaritalStatus, DateJoined, BirthDate, Empls.Roman as Grade, Empls.SalaryAmt, AccountNo, State ,
                                            (select top(1) EmplAct.PosTitle from EmplAct where EmplAct.EmplID=Empls.EmplID) as ActiveActing , Empls.DateOnPos as DateofLastPosition, Empls.LevelID as Qualification,
                                            case when Empls.Status='A' then 'Active' when Empls.Status='I' then 'InActive' end as Status, EmplImages.EmplPhoto, Profs.ProfName,
											case when Empls.JobCatID=0 then 'Managerial' when Empls.JobCatID=1 then 'Professional' when Empls.JobCatID=2 then 'Clerical'
											when Empls.JobCatID=3 then 'Non-Clerical' end as JobCategory,
											Cast((Empls.ServDays / 365) as nvarchar) +' year '+ Cast(((Empls.ServDays % 365) /30) as nvarchar) +' month ' + Cast(((Empls.ServDays % 365) % 30) as nvarchar) +' days' as Services,
											(select Sum(EmplPerfRate.PerfRate)/Count(EmplPerfRate.EmplID) from EmplPerfRate where EmplPerfRate.EmplID=Empls.EmplID) as AVGPerf
                                            from Empls inner join Jobs on  Empls.JobID = Jobs.JobID inner join BusUnits  on Empls.UnitID = BusUnits.UnitID
                                            inner join JobPositions on Empls.EmplID = JobPositions.EmplID inner join EmplImages on Empls.EmplID = EmplImages.EmplID
                                            inner join Profs on Empls.ProfID=Profs.ProfID
											inner join EthnGroup on EthnGroup.EthnID =Empls.EthnID
                                            WHERE Empls.EmplID =@empId", empIdvalue).ToList();
                return EmployeeDetails;
            }
        }

        public List<EmployeeEducation> GetEmpoyeeEducation(string empId)
        {
            using (var dbContextScope = _reportDBContext.GetDbContextScope())
            {
                var empIdvalue = new SqlParameter("@empId", empId);
                var emplyEdu = dbContextScope.DbContext.EmployeeEducation.FromSqlRaw(@"select EmplEduc.EmplID, EducLevels.LevelName as LevelID,Profs.ProfName,EmplEduc.InstName 
                                                     from EmplEduc inner join Profs on EmplEduc.ProfID = Profs.ProfID
		                                             inner join EducLevels on EmplEduc.LevelID=EducLevels.LevelID 
                                            WHERE EmplEduc.EmplID =@empId order by EmplEduc.GrdDT desc", empIdvalue).ToList();
                return emplyEdu;
            }
        }

        public List<EmployeeTraining> GetEmployeeTraining(string empId)
        {
            using (var dbContextScope = _reportDBContext.GetDbContextScope())
            {
                var empIdvalue = new SqlParameter("@empId", empId);
                var empTrai = dbContextScope.DbContext.EmployeeTraining.FromSqlRaw(@"select EmplTrain.EmplID,TrnTitle, EmplTrain.FromDT, EmplTrain.ToDT, Institutes.ShortName 
                                                from EmplTrain inner join Institutes on EmplTrain.InstNo = Institutes.InstNo 
                                            WHERE EmplTrain.EmplID =@empId order by EmplTrain.FromDT desc", empIdvalue).ToList();
                return empTrai;
            }
        }

        public List<EmployeeLanguge> GetEmployeeLanguge(string empId)
        {
            using (var dbContextScope = _reportDBContext.GetDbContextScope())
            {
                var empIdvalue = new SqlParameter("@empId", empId);
                var empLang = dbContextScope.DbContext.EmployeeLanguge.FromSqlRaw(@"select Langs.LangName, 
                        case when SpeakLang=4 then 'Excellent' when SpeakLang=3 then 'Very Good' when  SpeakLang=2 then 'Good'  when  SpeakLang=1 then 'Fair'  end as SpeakLang,
                        case when ReadLang=4 then 'Excellent' when speaklang=3 then 'Very Good' when  speaklang=2 then 'Good'  when  speaklang=1 then 'Fair'  end as ReadLang,
	                    case when WriteLang=4 then 'Excellent' when WriteLang=3 then 'Very Good' when  WriteLang=2 then 'Good'  when  WriteLang=1 then 'Fair'  end as WriteLang
	                    from EmplLang inner join Langs on EmplLang.LangID = Langs.LangID
                        WHERE EmplLang.EmplID =@empId", empIdvalue).ToList();
                return empLang;
            }
        }

        public List<EmployeePerformanceRate> GetEmployeePerformance(string empId)
        {
            using (var dbContextScope = _reportDBContext.GetDbContextScope())
            {
                var empIdvalue = new SqlParameter("@empId", empId);
                var empLang = dbContextScope.DbContext.EmployeePerformanceRate.FromSqlRaw(@"select top(4) DateRated,Fis_Yr,PerfRate,RateBy from EmplPerfRate 
                        WHERE EmplPerfRate.EmplID =@empId order by EmplPerfRate.ToDT desc", empIdvalue).ToList();
                return empLang;
            }
        }

        public List<EmployeeSalaryHistory> GetEmployeesalary(string empId)
        {
            using (var dbContextScope = _reportDBContext.GetDbContextScope())
            {
                var empIdvalue = new SqlParameter("@empId", empId);
                var empSal = dbContextScope.DbContext.EmployeeSalaryHistory.FromSqlRaw(@"select EffDT,SalChanges.ReasonName, SalAmt, TimeRange,
                                            case when EmplSalHist.JobCatID=0 then 'Managerial' when EmplSalHist.JobCatID=1 then 'Professional' when EmplSalHist.JobCatID=2 then 'Clerical'
											when EmplSalHist.JobCatID=3 then 'Non-Clerical' end as JobCat from EmplSalHist inner join SalChanges on EmplSalHist.ReasonID = SalChanges.ReasonID
                                             WHERE EmplSalHist.EmplID =@empId order by EmplSalHist.EffDT desc", empIdvalue).ToList();
                return empSal;
            }
        }

        public List<EmployeeFile> GetEmployeeFile(string empId)
        {
            using (var dbContextScope = _reportDBContext.GetDbContextScope())
            {
                var empIdvalue = new SqlParameter("@empId", empId);
                var empFile = dbContextScope.DbContext.EmployeeFile.FromSqlRaw(@"select Remark from EmplFile
                        WHERE EmplFile.EmplID =@empId", empIdvalue).ToList();
                return empFile;
            }
        }
    }
}
