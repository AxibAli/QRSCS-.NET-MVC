using QRSCS.Common.SpeechCaseHistory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QRSCS.Models
{
    public class SpeachCaseHistoryModelDTO
    {
        public SpeechCaseHistoryModel SpeechCaseHistory { get; set; }
        public GeneralInformationModel GeneralInformation { get; set; }
        public SpeechAndLanguageModel SpeechAndLanguage { get; set; }
        public ReceptiveLangaugeModel ReceptiveLangauge { get; set; }
        public ExpressiveLangauageModel ExpressiveLangauage { get; set; }
        public DevelopmentalHistoryModel DevelopmentalHistory { get; set; }

    }
}