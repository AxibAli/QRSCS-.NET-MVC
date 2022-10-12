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
    public class TeacherController : Controller
    {
        [HttpGet]
        public ActionResult CreateTeacher()
        {
            return View();
        }

        [HttpPost]
        public ActionResult CreateTeacher(CreateTeacherModel teacher, HttpPostedFileBase ImageFile)
        {
            if (ModelState.IsValid)
            {
                if (ImageFile == null)
                {
                    TempData["Message"] = "Upload Teacher Picture !";
                    return View();
                }
                else
                {
                    string Filename = Path.GetFileNameWithoutExtension(ImageFile.FileName);
                    string Extension = Path.GetExtension(ImageFile.FileName);
                    Filename = Filename + DateTime.Now.ToString("yymmssfff") + Extension;
                    teacher.Teacher_Picture = "~/ProjectData/" + Filename;
                    Filename = Path.Combine(Server.MapPath("~/ProjectData/"), Filename);
                    ImageFile.SaveAs(Filename);

                    CreateTeacherManager obj = new CreateTeacherManager();
                    teacher.User_ID = Convert.ToInt32(Session["User_ID"]);
                    teacher.Creation_Date = DateTime.Now;
                    int t_id = obj.AddTeacher(teacher);
                    if (t_id > 0)
                    {
                        TempData["Message"] = "Teacher Created Successfuly and Teacher ID is " + t_id;
                        return View();
                    }

                    else
                    {
                        TempData["Message"] = "Teacher Not Created !";
                    }
                }
            }
            else
            {
                TempData["Message"] = "Teacher Not Created Kindly Fill Complete Form !";
            }
            return View();
        }
    }
}