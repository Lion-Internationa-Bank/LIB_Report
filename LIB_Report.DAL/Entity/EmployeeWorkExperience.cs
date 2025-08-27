using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LIB_Report.DAL.Entity
{
    [Table("EmplWorkExp")]
    public class EmployeeWorkExperience
    {
        public string EmplID { get; set; }
        public DateTime FromDT { get; set; }
        public DateTime ToDT { get; set; }
        public string TimeRange { get; set; }
        public string PosTitle { get; set; }
        public string PlacAssg { get; set; }
        public string Active { get; set; }
       
    }
}
