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
    
    public partial class BodyPositionProcessing_OT2
    {
        public int BodyPositionProcessingOT2_ID { get; set; }
        public int OT2_ID { get; set; }
        public string RG_35 { get; set; }
        public string RG_36 { get; set; }
        public string RG_37 { get; set; }
        public string RG_38 { get; set; }
        public string RG_39 { get; set; }
        public string RG_40 { get; set; }
        public string SK_41 { get; set; }
        public string SK_42 { get; set; }
        public Nullable<int> Body_Postion_Raw_Score { get; set; }
        public string Body_Position_Comments { get; set; }
    
        public virtual OccupationalTherapy2 OccupationalTherapy2 { get; set; }
    }
}
