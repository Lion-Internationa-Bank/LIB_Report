using System;

namespace LIB_Report.DAL.DTO
{
    public class SearchEmployeeParameters
    {
        public string Unit { get; set; }
        public string Gender { get; set; }
        public string JobTitle { get; set; }
        public DateTime EmployementDateFrom { get; set; }
        public DateTime EmployementDateTo { get; set; }
        public string Status { get; set; }

    }

}
