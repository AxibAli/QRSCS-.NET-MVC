using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QRSCS.Models
{
    public class DashboardModel
    {
        public string List { get; set; }
        public int total_users { get; set; }
        public int total_deactivated_users { get; set; }
        public int total_students { get; set; }
        public int total_teachers { get; set; }
        public int total_histudents { get; set; }
        public int total_vistudents { get; set; }
        public int total_iddstudents { get; set; }
        public int total_IEP { get; set; }
        public int User_ID { get; set; }
    }
}