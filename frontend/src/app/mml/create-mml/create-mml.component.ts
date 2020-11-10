import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {mmlDataModel} from "./mml-create-model";
@Component({
  selector: 'app-create-mml',
  templateUrl: './create-mml.component.html',
  styleUrls: ['./create-mml.component.css']
})
export class CreateMmlComponent implements OnInit {

  createMMLForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createMMLForm = this.createFormGroup();
  }
  createFormGroup(){
    return new FormGroup({
      master_managers_List_group: new FormGroup(
        {
          UserInitials :new FormControl(),
          DataBox : new FormControl(),
          MgmtCo : new FormControl(),
          CompanyType : new FormControl(),
          AssnNameTag : new FormControl(),
        },
      ),
      general_info_group: new FormGroup(
        {
          generalMktgStatus: new FormControl(),
          generalStatusCategory: new FormControl(),
          generalHaveLisense: new FormControl(),
          generalLisenseNo: new FormControl(),
          generalLicenseData: new FormControl(),
          generalMrMs: new FormControl(),
          generalGender: new FormControl(),
          generalFirstName: new FormControl(),
          generalLastName: new FormControl(),
          generalNickNames: new FormControl(),
          generalPreferredTitle: new FormControl(),
          generalDispositionTowardCM: new FormControl(),
         
        },
      ),
      business_info_group: new FormGroup(
        {
          businessWorkBranchAddress: new FormControl(),
          businessCity: new FormControl(),
          businessState: new FormControl(),
          businessZipcode: new FormControl(),
          businessCounty: new FormControl(),
          businessLandlinePhone:new FormControl(),
          businessExtension: new FormControl(),
          businessCellPhone:new FormControl(),
          businessFax: new FormControl(),
          businessTollFree: new FormControl(),
          businessworkEmail:new FormControl(),
          businessworkNotes: new FormControl(),
        },
      ),
      onsite_info_group: new FormGroup(
        {
          onsiteAddress: new FormControl(),
          onsiteCity: new FormControl(),
          onsiteState: new FormControl(),
          onsiteZip: new FormControl(),
          onsiteCounty: new FormControl(),
          onsiteLandLinePhone: new FormControl(),
          onsiteExtension: new FormControl(),
          onsiteCellPhone: new FormControl(),
          onsiteFax: new FormControl(),
          onsiteTollFree: new FormControl(),
          onsiteworkEmail: new FormControl(),
          onsiteWorkNotes: new FormControl(),
        },
      ),
      staff_info_group: new FormGroup(
        {
          staffAssistantsName: new FormControl(),
          staffPhone: new FormControl(),
          staffExtension: new FormControl(),
          staffOnSiteAddress:new FormControl() ,
          staffCity: new FormControl(),
          staffState: new FormControl(),
          staffZip: new FormControl(),
          staffCounty: new FormControl(),
          staffLandLinePhone: new FormControl(),
          staffFax: new FormControl(),
          staffTollFree: new FormControl(),
          staffOnSiteEmail: new FormControl(),
          }),
          home_info_group: new FormGroup({
            homeMktgStatus: new FormControl(),
            homeStatusCategory: new FormControl(),
            homeAddress: new FormControl(),
            homeCity: new FormControl(),
            homeState: new FormControl(),
            homeZip: new FormControl(),
            homeCounty: new FormControl(),
            homeEmail: new FormControl(),
            homePhone: new FormControl(),
            homeNotes: new FormControl(),
          }),
        
      social_media_info_group: new FormGroup(
        {
          SocialMediaChristmasCard: new FormControl(),
          SocialMediaBirthdayEmail: new FormControl(),
          SocialMediaFacebookAuthorDate: new FormControl(),
          SocialMediaNewsletterAutho: new FormControl(),
          SocialMediaWillSendPhoto: new FormControl(),
          SocialMediaPhtoFurnished: new FormControl(),
          SocialMediaDeclinedAllBirthday: new FormControl(),
          SocialMediaFollowCMonFB: new FormControl(),
          SocialMediaFBFollowUp: new FormControl(),
          SocialMediaFBFollowedDate: new FormControl(),
          SocialMediaFollowCMonLI: new FormControl(),
          SocialMediaLIFollowUP: new FormControl(),
          SocialMediaLIFollowDate: new FormControl(),
          SocialMediaFollowAFS: new FormControl(),
          SocialMediaAFSFollowUP: new FormControl(),
          SocialMediaAFSFollowDate: new FormControl(),
          SocialMediaFacebook: new FormControl(),
          SocialMediaLinkedIn: new FormControl(),
          SocialMediaInstagram: new FormControl(),
          SocialMediaTwitter: new FormControl(),
          SocialMediaNone: new FormControl(),  
        },
      ),
      
    })
  }
 
  onSubmit()
  {
    const mmlModel: mmlDataModel = new mmlDataModel(

      this.createMMLForm.get("master_managers_List_group").get("UserInitials").value,
      this.createMMLForm.get("master_managers_List_group").get("DataBox").value,
      this.createMMLForm.get("master_managers_List_group").get("MgmtCo").value,
      this.createMMLForm.get("master_managers_List_group").get("CompanyType").value,
      this.createMMLForm.get("master_managers_List_group").get("AssnNameTag").value,
      
      this.createMMLForm.get("general_info_group").get("generalMktgStatus").value,
      this.createMMLForm.get("general_info_group").get("generalStatusCategory").value,
      this.createMMLForm.get("general_info_group").get("generalHaveLisense").value,
      this.createMMLForm.get("general_info_group").get("generalLisenseNo").value,
      this.createMMLForm.get("general_info_group").get("generalLicenseData").value,
      this.createMMLForm.get("general_info_group").get("generalMrMs").value,
      this.createMMLForm.get("general_info_group").get("generalGender").value,
      this.createMMLForm.get("general_info_group").get("generalFirstName").value,
      this.createMMLForm.get("general_info_group").get("generalLastName").value,
      this.createMMLForm.get("general_info_group").get("generalNickNames").value,
      this.createMMLForm.get("general_info_group").get("generalPreferredTitle").value,
      this.createMMLForm.get("general_info_group").get("generalDispositionTowardCM").value,

      this.createMMLForm.get("business_info_group").get("businessWorkBranchAddress").value,
      this.createMMLForm.get("business_info_group").get("businessCity").value,
      this.createMMLForm.get("business_info_group").get("businessState").value,
      this.createMMLForm.get("business_info_group").get("businessZipcode").value,
      this.createMMLForm.get("business_info_group").get("businessCounty").value,
      this.createMMLForm.get("business_info_group").get("businessLandlinePhone").value,
      this.createMMLForm.get("business_info_group").get("businessExtension").value,
      this.createMMLForm.get("business_info_group").get("businessCellPhone").value,
      this.createMMLForm.get("business_info_group").get("businessFax").value,
      this.createMMLForm.get("business_info_group").get("businessTollFree").value,
      this.createMMLForm.get("business_info_group").get("businessworkEmail").value,
      this.createMMLForm.get("business_info_group").get("businessworkNotes").value,
       
      this.createMMLForm.get("onsite_info_group").get("onsiteAddress").value,
      this.createMMLForm.get("onsite_info_group").get("onsiteCity").value,
      this.createMMLForm.get("onsite_info_group").get("onsiteZip").value,
      this.createMMLForm.get("onsite_info_group").get("onsiteCounty").value,
      this.createMMLForm.get("onsite_info_group").get("onsiteLandLinePhone").value,
      this.createMMLForm.get("onsite_info_group").get("onsiteExtension").value,
      this.createMMLForm.get("onsite_info_group").get("onsiteCellPhone").value,
      this.createMMLForm.get("onsite_info_group").get("onsiteFax").value,
      this.createMMLForm.get("onsite_info_group").get("onsiteTollFree").value,
      this.createMMLForm.get("onsite_info_group").get("onsiteworkEmail").value,
      this.createMMLForm.get("onsite_info_group").get("onsiteWorkNotes").value,

      this.createMMLForm.get("staff_info_group").get("staffAssistantsName").value,
      this.createMMLForm.get("staff_info_group").get("staffPhone").value,
      this.createMMLForm.get("staff_info_group").get("staffExtension").value,
      this.createMMLForm.get("staff_info_group").get("staffOnSiteAddress").value,
      this.createMMLForm.get("staff_info_group").get("staffCity").value,
      this.createMMLForm.get("staff_info_group").get("staffState").value,
      this.createMMLForm.get("staff_info_group").get("staffZip").value,
      this.createMMLForm.get("staff_info_group").get("staffCounty").value,
      this.createMMLForm.get("staff_info_group").get("staffLandLinePhone").value,
      this.createMMLForm.get("staff_info_group").get("staffFax").value,
      this.createMMLForm.get("staff_info_group").get("staffTollFree").value,
      this.createMMLForm.get("staff_info_group").get("staffOnSiteEmail").value,
      
      this.createMMLForm.get("home_info_group").get("homeMktgStatus").value,
      this.createMMLForm.get("home_info_group").get("homeStatusCategory").value,
      this.createMMLForm.get("home_info_group").get("homeAddress").value,
      this.createMMLForm.get("home_info_group").get("homeCity").value,
      this.createMMLForm.get("home_info_group").get("homeState").value,
      this.createMMLForm.get("home_info_group").get("homeZip").value,
      this.createMMLForm.get("home_info_group").get("homeCounty").value,
      this.createMMLForm.get("home_info_group").get("homeEmail").value,
      this.createMMLForm.get("home_info_group").get("homePhone").value,
      this.createMMLForm.get("home_info_group").get("homeNotes").value,
      
      this.createMMLForm.get("social_media_info_group").get("SocialMediaChristmasCard").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaBirthdayEmail").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaFacebookAuthorDate").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaNewsletterAutho").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaWillSendPhoto").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaPhtoFurnished").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaDeclinedAllBirthday").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaFollowCMonFB").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaFBFollowUp").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaFBFollowedDate").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaFollowCMonLI").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaLIFollowUP").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaLIFollowDate").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaFollowAFS").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaAFSFollowUP").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaAFSFollowDate").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaFacebook").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaLinkedIn").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaInstagram").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaTwitter").value,
      this.createMMLForm.get("social_media_info_group").get("SocialMediaNone").value,
      
    

     
    );
    }
    
}


