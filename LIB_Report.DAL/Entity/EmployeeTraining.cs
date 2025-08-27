using System;
using System.Collections.Generic;
using System.Text;

namespace LIB_Report.DAL.Entity
{
    public class EmployeeTraining
    {
        public string EmplID { get; set; }
        public string TrnTitle { get; set; }
        public DateTime FromDT { get; set; }
        public DateTime ToDT { get; set; }
        public string ShortName { get; set; }   
    }
}
