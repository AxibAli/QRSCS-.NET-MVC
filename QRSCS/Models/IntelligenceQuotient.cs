//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QRSCS.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class IntelligenceQuotient
    {
        public int IQ_ID { get; set; }
        public int GR_NO { get; set; }
        public Nullable<bool> Communication { get; set; }
        public Nullable<bool> Socialization { get; set; }
        public Nullable<bool> Self_Help_Skills { get; set; }
        public Nullable<bool> Cognition { get; set; }
        public Nullable<bool> Physical_Development { get; set; }
        public string Communication_Score { get; set; }
        public string Socialization_Score { get; set; }
        public string Self_Help_Skills_Score { get; set; }
        public string Cognition_Score { get; set; }
        public string Physical_Development_Score { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
    
        public virtual New_Admission New_Admission { get; set; }
        public virtual New_Admission New_Admission1 { get; set; }
    }
}
