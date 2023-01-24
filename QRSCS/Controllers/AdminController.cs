using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using QRSCS.Models;
using QRSCS.Manager;
using QRSCS.Filters;
using System.IO;
using QRSCS_Database.QRSCS.Manager;
using Newtonsoft.Json;
using System.Diagnostics;

namespace QRSCS_Database
{
    [AuthorizedUser]
    public class AdminController : Controller
    {

        public ActionResult Index(DashboardModel dbm)
        {
            DashboardManager obj = new DashboardManager();
            var request = obj.Cards(dbm);
            return View(request);
        }


        [HttpGet]
        public ActionResult CreateUser()
        {
            ViewBag.Message = "";
            return View();
        }

        [HttpPost]
        public ActionResult CreateUser(CreateUserModel Users, HttpPostedFileBase ImageFile)
        {
            if (ModelState.IsValid)
            {
                //if (ImageFile == null)
                //{
                //    TempData["Message"] = "Upload User Picture !";
                //    return View();
                //}
                //else
                //{
                    //if (Path.GetExtension(ImageFile.FileName) == ".jpg" || Path.GetExtension(ImageFile.FileName) == ".jpeg" || Path.GetExtension(ImageFile.FileName) == ".png")
                    //{
                        //string Filename = Path.GetFileNameWithoutExtension(ImageFile.FileName);
                        //string Extension = Path.GetExtension(ImageFile.FileName);
                        //Filename = Filename + DateTime.Now.ToString("yymmssfff") + Extension;
                        Users.Picture = "~/ProjectData/3dd6567f64dd48883893dbbbf43b3341215531832.JPG";
                        //Filename = Path.Combine(Server.MapPath("~/ProjectData/"), Filename);
                        //ImageFile.SaveAs(Filename);

                        CreateUserManager obj = new CreateUserManager();
                        Users.Created_By = Convert.ToString(Session["User_ID"]);
                        Users.Creation_Date = DateTime.Now;
                        int u_id = obj.AddUser(Users);
                        if (u_id > 0)
                        {
                            TempData["Message"] = "User Created Successfuly and User Id is " + u_id;
                            return RedirectToAction("ViewAllUser");
                        }

                        else
                        {
                            TempData["Message"] = "User Not Created !";
                        }
                    //}
                    //else
                    //{
                    //    TempData["Message"] = "This is not Image file!";
                    //}

                //}
            }
            else
            {
                TempData["Message"] = "User Not Created Kindly Fill Complete Form !";
            }
            return View();
        }
        [HttpPost]

        public ActionResult UpdateUserStatus(bool Status, int userId)
        {
            CreateUserManager obj = new CreateUserManager();
            var response = obj.UpdateUserStatus(Status, userId);

            return Json(response, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]

        public ActionResult UpdateStudentStatus(bool Status, int userId)
        {
            CreateUserManager obj = new CreateUserManager();
            var response = obj.UpdateStudentStatus(Status, userId);

            return Json(response, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ViewAllUser()
        {
            CreateUserManager obj = new CreateUserManager();
            List<CreateUserModel> User = obj.selectUser();
            //return Json(User,JsonRequestBehavior.AllowGet);
            return View(User);
        }

        public ActionResult ViewAllTeachers()
        {
            CreateTeacherManager obj = new CreateTeacherManager();
            List<CreateTeacherModel> User = obj.selectTeacher();
            return View(User);
        }
        public JsonResult GetStudentList()
        {
            CreateTeacherManager obj = new CreateTeacherManager();
           
            List<CreateTeacherModel> teacList = obj.selectTeacher().Select(x => new CreateTeacherModel
            {

                Teacher_ID = x.Teacher_ID,
                Teacher_Name = x.Teacher_Name,
                Date_of_Birth = Convert.ToDateTime(x.Date_of_Birth),
                NIC = x.NIC,
                Gender = x.Gender
            }).ToList();
            
            return Json(teacList, JsonRequestBehavior.AllowGet);

            
        }
        [HttpGet]

        public void DeleteTeacher(int Teacher_ID)
        {
            CreateTeacherManager obj = new CreateTeacherManager();
            obj.DeleteTeacher(Teacher_ID);
        }
        public JsonResult UpdateeTeachers(int Teacher_ID)
        {
            Debug.WriteLine("hello i am herer");
            CreateTeacherManager obj = new CreateTeacherManager();
            CreateTeacherModel user = obj.GetTeacher(Teacher_ID);
            string value = string.Empty;
            value = JsonConvert.SerializeObject(user, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
            });
            return Json(value, JsonRequestBehavior.AllowGet);
           
        }

        [HttpGet]
        public ActionResult UpdateUser(int User_ID)
        {
            CreateUserManager obj = new CreateUserManager();
            CreateUserModel user = obj.GetUser(User_ID);
            if (user == null)
            {
                TempData["Message"] = "Data not Found";
                return RedirectToAction("ViewAllUser");
            }

            else
            {
                return View(user);
            }
        }


        [HttpGet]
        public ActionResult UpdateTeacher(int Teacher_ID)
        {
            CreateTeacherManager obj = new CreateTeacherManager();
            CreateTeacherModel user = obj.GetTeacher(Teacher_ID);
            if (user == null)
            {
                TempData["Message"] = "Data not Found";
                return RedirectToAction("ViewAllTeachers");
            }

            else
            {
                return View(user);
            }
        }

        [HttpPost]
        public ActionResult UpdateUser(CreateUserModel user, HttpPostedFileBase ImageFile)
        {
            if (ModelState.IsValid)
            {
                if (ImageFile != null)
                {
                    string Filename = Path.GetFileNameWithoutExtension(ImageFile.FileName);
                    string Extension = Path.GetExtension(ImageFile.FileName);
                    Filename = Filename + DateTime.Now.ToString("yymmssfff") + Extension;
                    user.Picture = "~/ProjectData/" + Filename;
                    Filename = Path.Combine(Server.MapPath("~/ProjectData/"), Filename);
                    ImageFile.SaveAs(Filename);
                }

                CreateUserManager obj = new CreateUserManager();
                user.Updated_By = Convert.ToString(Session["User_ID"]);
                user.Update_Date = DateTime.Now;

                bool check = obj.UpdateUser(user);
                if (check)
                {
                    TempData["Message"] = "Data Update Successully";
                    return RedirectToAction("ViewAllUser");
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

        public ActionResult Logout()
        {
            Session.Clear();
            return RedirectToAction("Login", "Login");
        }

        //MyProfile_Modal
        public JsonResult UpdateUserProfile(int User_ID)
        {
            CreateUserManager obj = new CreateUserManager();
            CreateUserModel user = obj.GetUser(User_ID);

            string value = string.Empty;
            value = JsonConvert.SerializeObject(user, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
            });
            return Json(value, JsonRequestBehavior.AllowGet);

        }

        public void SaveDataInDatabase(CreateUserModel user)
        {   CreateUserManager obj = new CreateUserManager();
            user.Updated_By = Convert.ToString(Session["User_ID"]);
            user.Update_Date = DateTime.Now;
            obj.UpdateUser(user);
        }
        public void saveimg(HttpPostedFileBase datas) { 
            if (datas != null){
                try
                {
                    string Filename = Path.GetFileNameWithoutExtension(datas.FileName);
                    string Extension = Path.GetExtension(datas.FileName);
                    Filename = Filename + DateTime.Now.ToString("yymmssfff") + Extension;
                    CreateUserManager obj = new CreateUserManager();
                    CreateUserModel user = obj.GetUser((int)Session["User_ID"]);
                    user.Picture = "~/ProjectData/" + Filename;
                    Session["UserImage"] = "/ProjectData/" + Filename;
                    Filename = Path.Combine(Server.MapPath("~/ProjectData/"), Filename);
                    datas.SaveAs(Filename);
                    //HttpPostedFileBase ImageFile = user.Picture;
                    Debug.WriteLine(user.UserName);
                    bool check = obj.UpdateUser(user);

                }
                catch (Exception ex)
                {

                }
            }
        
          


        }

    }
}