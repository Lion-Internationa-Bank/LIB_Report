using System;
using System.Collections.Generic;
using System.Text;

namespace LIB_Report.DAL.Entity
{
    public class EmployeePerformanceRate
    {
        public string DateRated { get; set; }   
        public string Fis_Yr { get; set; }
        public decimal PerfRate { get; set; }
        public string RateBy {  get; set; }

    }
}
