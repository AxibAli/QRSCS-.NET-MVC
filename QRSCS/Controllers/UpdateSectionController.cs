using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using QRSCS.Models;
using QRSCS.Manager;
using QRSCS.Filters;
using System.IO;

namespace QRSCS.Controllers
{
    [AuthorizedUser]
    public class UpdateSectionController : Controller
    {
        public ActionResult AllStudentView()
        {
            NewAdmissionManager obj = new NewAdmissionManager();
            List<NewAdmissionModel> AllStudentView = obj.selectAllAdmission();
            return View(AllStudentView);
        }


        public ActionResult HIView()
        {
            NewAdmissionManager obj = new NewAdmissionManager();
            List<NewAdmissionModel> HIStudentView = obj.selectHI();
            return View(HIStudentView);
        }


        public ActionResult VIView()
        {
            NewAdmissionManager obj = new NewAdmissionManager();
            List<NewAdmissionModel> VIStudentView = obj.selectVI();
            return View(VIStudentView);
        }


        public ActionResult IDDView()
        {
            NewAdmissionManager obj = new NewAdmissionManager();
            List<NewAdmissionModel> IDDStudentView = obj.selectIDD();
            return View(IDDStudentView);
        }



        [HttpGet]
        public ActionResult UpdateStudentView(int GR_NO)
        {
            NewAdmissionManager obj = new NewAdmissionManager();
            NewAdmissionModel user = obj.GetStudent(GR_NO);
            if (user == null)
            {
                TempData["Message"] = "Data not Found";
                return RedirectToAction("AllStudentView");
            }

            else
            {
                return View(user);
            }
        }
        [HttpPost]
        public ActionResult UpdateStudentView(NewAdmissionModel user)
        {
            if (ModelState.IsValid)
            {
               
                NewAdmissionManager obj = new NewAdmissionManager();
                user.Updated_By = Convert.ToString(Session["User_ID"]);
                user.Update_Date = DateTime.Now;
                bool check = obj.UpdateStudent(user);    
                if (check)
                {
                    TempData["Message"] = "Data Update Successully";
                    return RedirectToAction("AllStudentView");
                }
                else
                {
                    return View();
                }
            }
            else
                {
                    TempData["Message"] = "Data Not Updated";
                    return View();
                }
        }
    }

}
