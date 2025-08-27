using System;
using System.Collections.Generic;
using System.Text;

namespace LIB_Report.DAL.Entity
{
    public class EmplAct
    {
        public string EmplID { get; set; } 
        public DateTime FromDT { get; set; } 
        public DateTime ToDT { get; set; } 
        public int RollNo { get; set; } 
        public int TimeRange { get; set; }
        public char Active { get; set; } 
        public string RefNo { get; set; } 
        public string PosID { get; set; } 
        public string PosTitle { get; set; } 
        public string EntryBy { get; set; } 
        public long SysID { get; set; } 
        public string UnitName { get; set; } 
    }
}
