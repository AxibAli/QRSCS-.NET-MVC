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
    
    public partial class IEPlan
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public IEPlan()
        {
            this.DevelopmentTeam_IEP = new HashSet<DevelopmentTeam_IEP>();
            this.IEP_Page3 = new HashSet<IEP_Page3>();
            this.MeetingInformation_IEP = new HashSet<MeetingInformation_IEP>();
            this.PresentLevel_IEP = new HashSet<PresentLevel_IEP>();
            this.PresentLevel_IEP1 = new HashSet<PresentLevel_IEP>();
            this.SpecialInstructional_IEP = new HashSet<SpecialInstructional_IEP>();
            this.SpecialInstructional_IEP1 = new HashSet<SpecialInstructional_IEP>();
            this.SupplementaryAids_IEP = new HashSet<SupplementaryAids_IEP>();
        }
    
        public int IEPlan_ID { get; set; }
        public int GR_No { get; set; }
        public Nullable<System.DateTime> Date_Of_Assessment { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DevelopmentTeam_IEP> DevelopmentTeam_IEP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<IEP_Page3> IEP_Page3 { get; set; }
        public virtual New_Admission New_Admission { get; set; }
        public virtual New_Admission New_Admission1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MeetingInformation_IEP> MeetingInformation_IEP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PresentLevel_IEP> PresentLevel_IEP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PresentLevel_IEP> PresentLevel_IEP1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SpecialInstructional_IEP> SpecialInstructional_IEP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SpecialInstructional_IEP> SpecialInstructional_IEP1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SupplementaryAids_IEP> SupplementaryAids_IEP { get; set; }
    }
}
