using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using QRSCS.Models;
using QRSCS.Manager;
using QRSCS.Filters;
using System.IO;

namespace QRSCS_Database
{
    namespace QRSCS.Manager
    {
        
        public class DashboardManager
        {
            private QRSCS_DatabaseEntities db = new QRSCS_DatabaseEntities();
            public DashboardModel Cards(DashboardModel dm)
            {
                dm.total_users = db.Users.Count();
                dm.total_teachers = db.Create_Teacher.Count();
                dm.total_students = db.New_Admission.Count();
                dm.total_IEP = db.IEPlans.Count();

                var hi = db.New_Admission.Where(x => x.Disability == "H.I").Count();
                var vi = db.New_Admission.Where(x => x.Disability == "V.I").Count();
                var idd = db.New_Admission.Where(x => x.Disability == "I.D.D").Count();
                var deact = db.Users.Where(x => x.IsActive == false).Count();

                dm.total_histudents = hi;
                dm.total_vistudents = vi;
                dm.total_iddstudents = idd;
                dm.total_deactivated_users = deact;
                return dm;
            }
        }
    }
}

