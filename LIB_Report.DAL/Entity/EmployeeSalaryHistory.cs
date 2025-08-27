using System;
using System.Collections.Generic;
using System.Text;

namespace LIB_Report.DAL.Entity
{
    public class EmployeeSalaryHistory
    {
        public DateTime EffDT { get; set; }

        public string ReasonName { get; set; }
        public string JobCat { get; set; }

        public decimal SalAmt { get; set; }
        public string TimeRange { get; set; }
    }
}
