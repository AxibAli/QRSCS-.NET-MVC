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
    
    public partial class Physiotherapy
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Physiotherapy()
        {
            this.HistoryPregnancy_PT = new HashSet<HistoryPregnancy_PT>();
            this.MedicalInformation_PT = new HashSet<MedicalInformation_PT>();
            this.Milestone_PT = new HashSet<Milestone_PT>();
            this.PhysicalAssessment_PT = new HashSet<PhysicalAssessment_PT>();
            this.TestDone_PT = new HashSet<TestDone_PT>();
            this.TreatmentPlan_PT = new HashSet<TreatmentPlan_PT>();
        }
    
        public int PT_ID { get; set; }
        public int GR_NO { get; set; }
        public Nullable<bool> CP { get; set; }
        public Nullable<bool> Down_Syndrome { get; set; }
        public Nullable<bool> Autistic { get; set; }
        public Nullable<bool> Muscular_Dystrophy { get; set; }
        public Nullable<bool> Physical_Disability { get; set; }
        public string Others { get; set; }
        public Nullable<System.DateTime> Date_of_Assessment { get; set; }
        public Nullable<int> Siblings { get; set; }
        public string Marriage_Type { get; set; }
        public string Blood_Group { get; set; }
        public string General_Health { get; set; }
        public string Present_Complain { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<HistoryPregnancy_PT> HistoryPregnancy_PT { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MedicalInformation_PT> MedicalInformation_PT { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Milestone_PT> Milestone_PT { get; set; }
        public virtual New_Admission New_Admission { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PhysicalAssessment_PT> PhysicalAssessment_PT { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TestDone_PT> TestDone_PT { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TreatmentPlan_PT> TreatmentPlan_PT { get; set; }
    }
}
