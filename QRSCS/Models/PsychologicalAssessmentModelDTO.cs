using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QRSCS.Common.PA;
using System.ComponentModel.DataAnnotations;

namespace QRSCS.Models
{
    public class PsychologicalAssessmentModelDTO
    {
        public PsychologicalAssessmentModel psychologicalAssessment { get; set; }
        public TestsPAModel testsPA { get; set; }

    }
}