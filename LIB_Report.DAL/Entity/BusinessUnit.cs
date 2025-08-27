using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LIB_Report.DAL.Entity
{
    [Table("BusUnits")]
    public  class BusinessUnit
    {
        [Key]
        public string UnitID { get; set; }
        public string UnitName { get; set; }
        public int BusCat { get; set; }
    }
}
