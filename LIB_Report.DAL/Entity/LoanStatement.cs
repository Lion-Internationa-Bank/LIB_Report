using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LIB_Report.DAL.Entity
{
    public class LoanStatement
    {
        public DateTime DCO { get; set; }
        public string SEN { get; set; }
        public decimal MON { get; set; }
        public string NOMREST { get; set; }
        public string NAT { get; set; }
        public string LIBE { get; set; }

        public string EVE { get; set; }

        public string TYP { get; set; }

        public string AGE { get; set; }
    }
}
