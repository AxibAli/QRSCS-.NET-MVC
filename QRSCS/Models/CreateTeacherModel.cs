using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace QRSCS.Models
{
    public class CreateTeacherModel
    {
        public int Teacher_ID { get; set; }


        public string Teacher_Picture { get; set; }


        [Required(ErrorMessage = "Kindly Write a Teacher's  Name?")]
        public string Teacher_Name { get; set; }


        [Required(ErrorMessage = "Kindly Select a Gender?")]
        public string Gender { get; set; }



        [Required]
        [MaxLength(14, ErrorMessage = "Enter a valid NIC of 14 Digits")]
        [MinLength(14, ErrorMessage = "Enter a valid NIC of 14 Digits")]
        public string NIC { get; set; }



        [Required]
        [MaxLength(11, ErrorMessage = "Enter a valid Contact Format: 03##-#######")]
        [MinLength(11, ErrorMessage = "Enter a valid contact Format: 03##-#######")]
        public string Contact { get; set; }



        [Required(ErrorMessage = "Kindly Enter a Date of Birth?")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime Date_of_Birth { get; set; }

        [Required(ErrorMessage = "Kindly Enter an Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Kindly Enter a Complete Address")]
        public string Address { get; set; }

        [Required(ErrorMessage = "Kindly Enter a City")]
        public string City { get; set; }

        [Required(ErrorMessage = "Kindly Enter a State")]
        public string State { get; set; }


        public string Status { get; set; }
        public int User_ID { get; set; }
        public string Updtae_By { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime Update_Date { get; set; }


        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime Creation_Date { get; set; }

    }
}