using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LIB_Report.DAL.Entity
{
    [Table("Jobs")]
    public class JobsTitle
    {
        [Key]
        public string JobID { get; set; }
        public string JobTitle { get; set; }
    }
}
