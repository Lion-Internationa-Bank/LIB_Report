using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LIB_Report.DAL.Entity
{
    [Table("Empls")]
    public class Employee
    {
        [Key]
        public string EmplID { get; set; }
        public string Gender { get; set; }
        public string StruID { get; set; }
        public string FirstName { get; set; }
        public string FatherName { get; set; }
        public string GFatherName { get; set; }
        public DateTime DateJoined { get; set; }
        public string JobID { get; set; }  
        public string UnitID { get; set; }  
        public string LevelID { get; set; }

        public string AccountNo { get; set; }
        public int Grade { get; set; }
        public DateTime Entry_DT { get; set; }
        public DateTime DateOnPos { get; set; }
        public DateTime DateOnSal { get; set; }
        public string Entry_By { get; set; }
        public string FaxNo { get; set; }
        public string HomeTelNo { get; set; }
        public string MobileNo { get; set; }
        public int OrgLevel { get; set; }
        public string Status { get; set; }

    }
}
