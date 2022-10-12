using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using QRSCS.Models;
using QRSCS.Manager;
using System.IO;
using QRSCS.Filters;
using Microsoft.VisualBasic;

namespace QRSCS.Controllers
{
    [AuthorizedUser]
    public class EditorController : Controller
    {

        // GET: Editor
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult NewAdmission()
        {
            ViewBag.Message = "";
            return View();
        }

        [HttpPost]
        public JsonResult GetUserByID(string GR_NO)
        {
            CaseHistoryManager onbj = new CaseHistoryManager();
            return Json(onbj.CheckUserExists(GR_NO));
        }

        [HttpPost]
        public ActionResult NewAdmission(NewAdmissionModel student)
        {
            if (ModelState.IsValid)
            {
                NewAdmissionManager obj = new NewAdmissionManager();
                student.User_ID = Convert.ToInt32(Session["User_ID"]);
                int grno = obj.AddStudent(student);
                if (grno > 0)
                {
                    TempData["Message"] = "Student Added Successfuly and Student GR-NO is " + grno;
                    return RedirectToAction("AllStudentView", "UpdateSection");
                }

                else
                {
                    TempData["Message"] = "Student Not Added !";
                }
            }
            else
            {
                TempData["Message"] = "Student Not Added !";
            }
            return View();
        }

        [HttpGet]
        public ActionResult CaseHistory()
        {
            ViewBag.Message = "";
            return View();
        }

        [HttpPost]
        public ActionResult CaseHistory(CaseHistoryModelDTO student)
        {
            if (ModelState.IsValid)
            {
                CaseHistoryManager obj = new CaseHistoryManager();
                int chistoryID = obj.AddCaseHistory(student);
                if (chistoryID > 0)
                {
                    TempData["Message"] = "Student Case History Added Successfuly  " + chistoryID;
                }

                else
                {
                    TempData["Message"] = "Student Case History Not Added !";
                }
            }
            else
            {
                TempData["Message"] = "Student Case History Not Added !";
            }
            return View();
        }

        [HttpGet]
        public ActionResult SpeechTherapyAssessment()

        {
            return View();
        }
        [HttpPost]
        public ActionResult SpeechTherapyAssessment(SpeechTherapyAssessmentModel student, HttpPostedFileBase ImageFile)

        {
            if (ModelState.IsValid)
            {
                if (ImageFile == null)
                {
                    TempData["Message"] = "Upload User Picture !";
                    return View();
                }
                else
                {
                    string Filename = Path.GetFileNameWithoutExtension(ImageFile.FileName);
                    string Extension = Path.GetExtension(ImageFile.FileName);
                    Filename = Filename + DateTime.Now.ToString("yymmssfff") + Extension;
                    student.Speech_Test_Image = "~/ProjectData/" + Filename;
                    Filename = Path.Combine(Server.MapPath("~/ProjectData/"), Filename);
                    ImageFile.SaveAs(Filename);

                    SpeechTherapyAssessmentManager obj = new SpeechTherapyAssessmentManager();

                    int staid = obj.AddSpeechTherapyAssessment(student);

                    if (staid == 1)
                    {
                        TempData["Message"] = "Successfully Saved";
                        return View();
                    }
                    else if (staid == -1)
                    {
                        TempData["Message"] = "No Record Found";
                    }
                    else if (staid == 2)
                    {
                        TempData["Message"] = "Successfully Updated";
                    }
                    else
                    {
                        TempData["Message"] = "Not saved";
                    }
                }
            }

            return RedirectToAction("Performance", "Editor");
        }

        [HttpGet]
        public ActionResult SpeechCaseHistory()
        {
            return View();
        }
        [HttpPost]
        public ActionResult SpeechCaseHistory(SpeachCaseHistoryModelDTO SpeechHistory)
        {
            if (ModelState.IsValid)
            {
                SpeechCaseHistoryManager obj = new SpeechCaseHistoryManager();
                int SpeachCaseHistoryID = obj.AddSpeechCaseHistory(SpeechHistory);
                if (SpeachCaseHistoryID > 0)
                {
                    TempData["Message"] = "Speach Case History Added Successfuly" + SpeachCaseHistoryID;
                }

                else
                {
                    TempData["Message"] = "Speach Case History Not Added !";
                }
            }
            else
            {
                TempData["Message"] = "Speach Case History Not Added !";
            }
            return View();
        }
        public ActionResult AudiologyAssessment()
        {
            return View();
        }

        [HttpPost]
        public JsonResult AudiologyAssessment(AssessmentModel assessment, int GrNo)
        {
            AudioAssessmentManager ad = new AudioAssessmentManager();
            var result = ad.UpdateAudiologyAssessment(assessment, GrNo);
            return Json(result);
        }

        [HttpPost]
        public JsonResult GetAudiologyAssessment(int id)
        {
            AudioAssessmentManager ad = new AudioAssessmentManager();
            var json = ad.GetAudiologyAssessment(id);
            return Json(json);
        }

        public ActionResult Performance()
        {
            return View();
        }

        public ActionResult VIPerformance()
        {
            return View();
        }

        [HttpPost]
        public ActionResult GetAudiologyPerformance(int id)
        {
            AudioAssessmentManager manager = new AudioAssessmentManager();
            var data = manager.GetAssessmentPerformance(id);
            return Json(data);
        }

        [HttpGet]
        public JsonResult GetAdmissionList()
        {
            List<int> id = new List<int>();
            using (QRSCS_DatabaseEntities db = new QRSCS_DatabaseEntities())
            {
                var data = db.New_Admission.ToList();
                for (var i = 0; i < data.Count; i++)
                {
                    id.Add(data[i].GR_NO);
                }
            }
            return Json(id, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetName()
        {
            int id = Convert.ToInt32(Request.QueryString["GR_NO"]);
            using (QRSCS_DatabaseEntities db = new QRSCS_DatabaseEntities())
            {
                var data = db.New_Admission.FirstOrDefault(x => x.GR_NO == id);
                var name = data.Student_First_Name + " " + data.Student_Last_Name;
                return Json(name, JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public ActionResult GetSpeechPerformance(int id)
        {
            SpeechTherapyAssessmentManager manager = new SpeechTherapyAssessmentManager();
            var result = manager.GetSpeechAssessmentPerformance(id);

            return Json(result, JsonRequestBehavior.AllowGet);

        }


        [HttpGet]
        public ActionResult GetOT2RecordbyId()
        {
            var GRNO = Request.QueryString["GRNO"];
            OccupationalTherapy2Manager ot2 = new OccupationalTherapy2Manager();
            var data = ot2.CheckUserExists(GRNO);

            return Json(data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddOccupationalTherapy2(OccupationalTherapy2ModelDTO ot2Model)
        {
            var message = string.Empty;

            var ot2 = new OccupationalTherapy2Manager().AddOccupationalTherapy2(ot2Model);

            if (ot2 == 1)
            {
                message = ResponseMessage.Success;
            }
            else if (ot2 == 2)
            {
                message = ResponseMessage.AlreadyPresent;
            }
            else
            {
                message = ResponseMessage.Error;
            }

            return Json(message, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult GetOT2Performance()
        {
            OccupationalTherapy2Manager ot2 = new OccupationalTherapy2Manager();

            var GRNO = Convert.ToInt32(Request.QueryString["GRNO"]);
            var isCurrentYear = Convert.ToBoolean(Request.QueryString["isCurrentYear"]);

            var student = ot2.GetStudentById(GRNO);

            if (student != null)
            {
                var performance = new OccupationalTherapy2Manager().GetOT2PerformanceListbyId(GRNO, isCurrentYear);
                return Json(new { Student = student, Performance = performance }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(new { Student = "No Student Found" }, JsonRequestBehavior.AllowGet);
            }


        }
    }


}