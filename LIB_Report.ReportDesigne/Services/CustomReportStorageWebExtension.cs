using AutoMapper;
using DevExpress.DataAccess.ObjectBinding;
using DevExpress.XtraReports.Services;
using DevExpress.XtraReports.UI;
using DevExpress.XtraReports.Web.Extensions;
using LIB_Report.DAL.Repository;
using LIB_Report.ReportDesigne.Reports;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.IO;


namespace LIB_Report.Report.Services
{
    public class CustomReportStorageWebExtension : ReportStorageWebExtension
    {
        public CustomReportStorageWebExtension()
        {
        }
        public override bool CanSetData(string url)
        {
            // Determines whether a report with the specified URL can be saved.
            // Add custom logic that returns **false** for reports that should be read-only.
            // Return **true** if no valdation is required.
            // This method is called only for valid URLs (if the **IsValidUrl** method returns **true**).

            return true;
        }

        public override bool IsValidUrl(string url)
        {
            // Determines whether the URL passed to the current report storage is valid.
            // Implement your own logic to prohibit URLs that contain spaces or other specific characters.
            // Return **true** if no validation is required.

            return true;
        }

        public override byte[] GetData(string url)
        {
            // Uses a specified URL to return report layout data stored within a report storage medium.
            // This method is called if the **IsValidUrl** method returns **true**.
            // You can use the **GetData** method to process report parameters sent from the client
            // if the parameters are included in the report URL's query string.


            string[] parts = url.Split('?');
            string reportName = parts[0];
            string parametersQueryString = parts.Length > 1 ? parts[1] : String.Empty;
            using var ms = new MemoryStream();
            XtraReport report =new XtraReport();
            if(reportName == "EmployeeArchive")
            {
                report = new EmployeeDetail();
            }
           
            // Apply the parameter values to the report.
            var parameters = System.Web.HttpUtility.ParseQueryString(parametersQueryString);

            foreach (string parameterName in parameters.AllKeys)
            {
                if (parameters.Get(parameterName) != null && parameters.Get(parameterName) != "null" && parameters.Get(parameterName)!="")
                    report.Parameters[parameterName].Value = Convert.ChangeType(
                        parameters.Get(parameterName), report.Parameters[parameterName].Type);
            }
            report.CreateDocument();
            report.SaveLayoutToXml(ms);
            return ms.ToArray();
            // return new byte[0];
        }

        public override Dictionary<string, string> GetUrls()
        {
            // Returns a dictionary that contains the report names (URLs) and display names. 
            // The Report Designer uses this method to populate the Open Report and Save Report dialogs.

            return new Dictionary<string, string>();
        }

    }
}