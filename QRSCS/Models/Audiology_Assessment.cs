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
    
    public partial class Audiology_Assessment
    {
        public int Audiology_Assessment_ID { get; set; }
        public int GR_NO { get; set; }
        public System.DateTime Date_of_Assessment { get; set; }
        public string Left_Ear_Air_UnmaskedFrequency { get; set; }
        public string Left_Ear_Air_Unmasked_HearingLevel { get; set; }
        public string Left_Ear_Bone_MaskedFrequency { get; set; }
        public string Left_Ear_Bone_Masked_HearingLevel { get; set; }
        public string Right_Ear_Air_UnmaskedFrequency { get; set; }
        public string Right_Ear_Air_Unmasked_HearingLevel { get; set; }
        public string Right_Ear_Bone_MaskedFrequency { get; set; }
        public string Right_Ear_Bone_Masked_HearingLevel { get; set; }
        public string Left_Ear_Mean { get; set; }
        public string Right_Ear_Mean { get; set; }
    
        public virtual New_Admission New_Admission { get; set; }
    }
}
