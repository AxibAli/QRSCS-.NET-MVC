using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using QRSCS.Models;
using QRSCS.Manager;
using QRSCS.Filters;



namespace QRSCS.Controllers
{

    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(LoginModel logindata)
        {
            if (ModelState.IsValid)
            {
                LoginManager obj = new LoginManager();
                CreateUserModel userdata = obj.checklogin(logindata);
                if (userdata.IsActive == false)
                {
                    TempData["Message"] = "You have currently disabled, kindly contact your Admin";
                    return View();
                }
                if (userdata != null)
                {
                    Session["IsLogedIn"] = true;
                    Session["Full_Name"] = userdata.Full_Name;
                    Session["User_ID"] = userdata.User_ID;
                    Session["UserImage"] = userdata.Picture;

                    return RedirectToAction("Index", "Admin");
                }
                else
                {
                    TempData["Message"] = "UserName Or Password Incorrect";
                    return View();
                }
            }
            else
            {
                TempData["Message"] = "Please Enter UserName and Password First ";
                return View();
            }

        }
    }
}