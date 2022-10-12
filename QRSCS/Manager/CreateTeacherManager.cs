using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QRSCS.Models;
using System.Data.Entity;

namespace QRSCS.Manager
{
    public class CreateTeacherManager
    {
        int teacher_id = 0;
        public int AddTeacher(CreateTeacherModel tid)
        {
            using (QRSCS_DatabaseEntities db = new QRSCS_DatabaseEntities())
            {
                Create_Teacher tblteacher = new Create_Teacher();
                tblteacher.Teacher_Name = tid.Teacher_Name;
                tblteacher.Teacher_Picture = tid.Teacher_Picture;
                tblteacher.Gender = tid.Gender;
                tblteacher.NIC = tid.NIC;
                tblteacher.Date_of_Birth = tid.Date_of_Birth;
                tblteacher.Contact = tid.Contact;
                tblteacher.Email = tid.Email;
                tblteacher.Address = tid.Address;
                tblteacher.City = tid.City;
                tblteacher.State = tid.State;
                tblteacher.Status = tid.Status;
                tblteacher.User_ID = tid.User_ID;
                //tblteacher.Update_By = tid.Updtae_By;
                tblteacher.Creation_Date = tid.Creation_Date;
                //tblteacher.Update_Date = tid.Update_Date;
                db.Create_Teacher.Add(tblteacher);
                db.SaveChanges();

                teacher_id = tblteacher.Teacher_ID;
            }
            return teacher_id;
        }
        public List<CreateTeacherModel> selectTeacher()
        {
            using (QRSCS_DatabaseEntities db = new QRSCS_DatabaseEntities())
            {
                var request = db.Create_Teacher.ToList();
                List<CreateTeacherModel> List = request.Select(x => new CreateTeacherModel
                {
                    Teacher_ID = x.Teacher_ID,
                    Teacher_Picture = x.Teacher_Picture,
                    Teacher_Name = x.Teacher_Name,
                    NIC = x.NIC,
                    Gender = x.Gender,
                    Date_of_Birth = x.Date_of_Birth,
                    Contact = x.Contact,
                    Address = x.Address,
                    City = x.City,
                    State = x.State,
                    Status = x.Status,
                    Email = x.Email
                }).ToList();
                return List;
            }
        }


        public CreateTeacherModel GetTeacher(int uid)
        {
            using (QRSCS_DatabaseEntities db = new QRSCS_DatabaseEntities())
            {
                var request = db.Create_Teacher.Where(x => x.Teacher_ID == uid).FirstOrDefault();
                CreateTeacherModel User = null;
                if (request != null)
                {
                    User = new CreateTeacherModel()
                    {
                        Teacher_ID = request.Teacher_ID,
                        Teacher_Picture = request.Teacher_Picture,
                        Teacher_Name = request.Teacher_Name,
                        NIC = request.NIC,
                        Gender = request.Gender,
                        Date_of_Birth = request.Date_of_Birth,
                        Contact = request.Contact,
                        Address = request.Address,
                        City = request.City,
                        State = request.State,
                        Status = request.Status,
                        Email = request.Email
                    };
                    return User;
                }

                else
                {
                    return User;
                }
            }
        }
    
    public bool UpdateTeacher(CreateTeacherModel uid)
    {
        using (QRSCS_DatabaseEntities db = new QRSCS_DatabaseEntities())
        {
            var Data = db.Create_Teacher.Where(x => x.Teacher_ID == uid.Teacher_ID).FirstOrDefault();
            if (Data != null)
            {
                Data.Teacher_ID = uid.User_ID;
                Data.Teacher_Picture = uid.Teacher_Picture;
                Data.Teacher_Name = uid.Teacher_Name;
                Data.NIC = uid.NIC;
                Data.Gender = uid.Gender;
                Data.Date_of_Birth = uid.Date_of_Birth;
                Data.Contact = uid.Contact;
                Data.Address = uid.Address;
                Data.City = uid.City;
                Data.State = uid.State;
                Data.Status = uid.Status;
                Data.Email = uid.Email;
                Data.Update_Date = uid.Update_Date;
                db.Entry(Data).State = EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }
    }

}
}
