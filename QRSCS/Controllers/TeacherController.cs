using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using QRSCS.Models;
using QRSCS.Manager;
using QRSCS.Filters;
using System.IO;
using System.Security.Cryptography;
using System.Data.Entity;
using System.Web.UI.WebControls;

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
                        return RedirectToAction("CreateTeacher","Teacher" );
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
        [HttpPost]
        public ActionResult UpdatesTeacher(CreateTeacherModel teacher)
        {

            using (QRSCS_DatabaseEntities db = new QRSCS_DatabaseEntities())
            {
                var request = db.Create_Teacher.Where(x => x.Teacher_ID == teacher.Teacher_ID).FirstOrDefault();
               
                if (request != null)
                {
                   
                    
                    request.Teacher_Name = teacher.Teacher_Name;
                    request.NIC = teacher.NIC;
                    request.Gender = teacher.Gender;
                    request.Date_of_Birth = teacher.Date_of_Birth;
                    request.Contact = teacher.Contact;
                    request.Address = teacher.Address;
                    request.City = teacher.City;
                    request.Update_By = Convert.ToString(Session["User_ID"]);
                    request.Email = teacher.Email;
                    request.State = teacher.State;
                    request.Update_Date = DateTime.Now;
                    db.SaveChanges();

                }
            }
                
            
            return RedirectToAction("CreateTeacher", "Teacher");
        }



        public ActionResult UpdatesTeacherPic(HttpPostedFileBase datas,int id)
        {

            if (datas != null)
            {
                using (QRSCS_DatabaseEntities db = new QRSCS_DatabaseEntities())
                {
                    var request = db.Create_Teacher.Where(x => x.Teacher_ID == id).FirstOrDefault();
                    string Filename = Path.GetFileNameWithoutExtension(datas.FileName);
                    string Extension = Path.GetExtension(datas.FileName);
                    Filename = Filename + DateTime.Now.ToString("yymmssfff") + Extension;
                    request.Teacher_Picture = "~/ProjectData/" + Filename;
                    Filename = Path.Combine(Server.MapPath("~/ProjectData/"), Filename);
                    datas.SaveAs(Filename);
                    db.SaveChanges();

                }
            }
                return RedirectToAction("CreateTeacher", "Teacher");
        }

    }
}