using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LIB_Report.DAL.Entity
{
    [Table("EmplPrevWorkExp")]
    public class PreviousEmployeeWorkExperience
    {
        public string EmplID { get; set; }
        public DateTime FromDT { get; set; }
        public DateTime ToDT { get; set; }
        public string JobTitle { get; set; }
        public string PrevOrgName { get; set; }
    }
}
