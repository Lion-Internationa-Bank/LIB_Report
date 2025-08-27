using System;
using System.Collections.Generic;
using System.Security.Principal;
using System.Text;

namespace LIB_Report.DAL.Entity
{
    public class EmployeeDetail
    {
        public string Fullname { get; set; }
        public string EmplID { get; set; }
        public string Gender { get; set; }
        public string JobTitle { get; set; }
        public string UnitName { get; set; }
        public string PosTitle { get; set; }
        public string EthnID { get; set; }
        public string TIN_No { get; set; }
        public string MobileNo { get; set; }
        public string MaritalStatus { get; set; }
        public DateTime? DateJoined { get; set; }
        public DateTime? BirthDate { get; set; }
        public string Grade { get; set; }
        public decimal SalaryAmt { get; set; }
        public string AccountNo { get; set; }
        public int? State { get; set; }
        public string ActiveActing { get; set; }
        public string Services { get; set; }
        public decimal? AVGPerf { get; set; }
        public DateTime? DateofLastPosition { get; set; }
        public string Qualification { get; set; }
        public string Status { get; set; }
        public byte[] EmplPhoto { get; set; }
        public string ProfName { get; set; }
        public string JobCategory { get; set; } 
    }
}
