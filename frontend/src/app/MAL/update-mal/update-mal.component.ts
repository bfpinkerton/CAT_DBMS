import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MalService} from "../mal.service";
import {malDataModel} from "../mal-model";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-update-mal',
  templateUrl: './update-mal.component.html',
  styleUrls: ['./update-mal.component.css']
})
export class UpdateMalComponent implements OnInit {

  updateMALForm: FormGroup;
  malModel: malDataModel = new malDataModel();
  errorUpdatingMalForm: boolean = false;
  inquiriesDialog: boolean;
  inquiries: Inquiry[];
  inquiry: Inquiry;
  submitted: boolean;

  constructor(private router: Router, private malService: MalService,
              private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.updateMALForm = this.createFormGroup();
  }

  createFormGroup(){
    return new FormGroup({
      primary_information_group: new FormGroup(
        {
          origination_date: new FormControl(),
          originator: new FormControl(),
          date_last_update: new FormControl(),
          updated_by: new FormControl(),
          legal_association_name: new FormControl(),
          also_known_as: new FormControl(),
          client_account_number: new FormControl(),
          file_name: new FormControl(),
          status: new FormControl(null, Validators.required),
          special_classification: new FormControl(null, Validators.required),
          association_type: new FormControl(null, Validators.required),
          sec_association_type: new FormControl(null, Validators.required),
          domicile_county: new FormControl(null, Validators.required),
          domicile_city: new FormControl(null, Validators.required),
          domicile_zip_code: new FormControl()
        },
      ),
      supplement_association_info_group: new FormGroup(
        {
          association_address: new FormControl(),
          city: new FormControl(),
          zip_code: new FormControl(),
          phone_number: new FormControl(),
          website: new FormControl(),
          email_address: new FormControl(),
          number_of_untis: new FormControl(),
          community_55_plus: new FormControl(),
          association_controlled_by: new FormControl(),
          turnover_date: new FormControl(),
          association_type: new FormControl(),
          registered_agent: new FormControl(),
          ra_date: new FormControl(),
          clubhouse: new FormControl(),
          master_association_type: new FormControl(),
          assessments: new FormControl(),
          intervals: new FormControl(),
          rent_availability: new FormControl(),
          sub_association_type: new FormControl(),
          price: new FormControl(),
          theater_seating: new FormControl(),
          tables_seating: new FormControl(),
          type_of_tables: new FormControl(),
          additional_notes: new FormControl()
        },
      ),
      general_board_member_info: new FormGroup(
        {
          corporate_status: new FormControl(),
          annual_meeting_month: new FormControl(),
          last_corporate_report_filed: new FormControl(),
          board_term_expiration: new FormControl(),
          seminar_status: new FormControl(),
          seminar_name_tag_color: new FormControl(),
          no_of_directors: new FormControl(),
          association_updated_date: new FormControl()
        },
      ),
      representation_inquiries: new FormGroup(
        {
          services_request: new FormControl(),
          origination_source: new FormControl(),
          cm_sponsored_organization: new FormControl(),
          source: new FormControl(),
          date_requested: new FormControl(),
        },
      ),
      merchandise_purchases: new FormGroup(
        {
          mug_purchases: new FormGroup({
            purchase_status: new FormControl(),
            sale_source: new FormControl(),
            date_purchased: new FormControl(),
            quantity: new FormControl(),
            delivery_method: new FormControl(),
            payment_method: new FormControl(),
            check_number: new FormControl()
          }),
          florida_statue_service: new FormGroup({
            purchase_status: new FormControl(),
            date_requested: new FormControl(),
            quantity: new FormControl(),
            which_book: new FormControl(),
            referral: new FormControl(),
            referral_other: new FormControl(),
            sold_by: new FormControl(),
            delivery_method: new FormControl(),
            payment_method: new FormControl(),
            check_number: new FormControl()
          }),
        },
      ),
      social_media: new FormGroup(
        {
          social_media: new FormControl(),
          has_facebook: new FormControl(),
          facebook_account_name: new FormControl(),
          facebook_date: new FormControl(),
          has_linkedin: new FormControl(),
          linkedin_account_name: new FormControl(),
          linkedin_date: new FormControl(),
          has_twitter: new FormControl(),
          twitter_account_name: new FormControl(),
          twitter_date: new FormControl(),
          has_instagram: new FormControl(),
          instagram_account_name: new FormControl(),
          instagram_date: new FormControl(),
        },
      ),
      hiring_info: new FormGroup(
        {
          date_hired: new FormControl(),
          reason_hired: new FormControl(),
          hiring_comments: new FormControl(),
          type_of_representation: new FormControl(),
          date: new FormControl(),
          referral_name: new FormControl(),
          position: new FormControl(),
          company: new FormControl(),
          primary_firm: new FormControl(),
          other_firms: new FormControl(),
          purpose: new FormControl(),
          former_firm: new FormControl(),
        },
      ),
      termination_info: new FormGroup(
        {
          date_terminated: new FormControl(),
          reason_terminated: new FormControl(),
          revenue_generated: new FormControl(),
          terminating_notes: new FormControl(),
          termination_origin: new FormControl(),
          real_reason_terminated: new FormControl()
        },
      ),
      referrals: new FormGroup(
        {
          referrals_to_CM: new FormGroup({
            date: new FormControl(),
            referred_by: new FormControl(),
            position: new FormControl(),
            company: new FormControl(),
            meeting: new FormControl()
          }),
          referrals_from_CM: new FormGroup({
            date: new FormControl(),
            referral_requested_by: new FormControl(),
            title: new FormControl(),
            business: new FormControl()
          })
        },
      ),
      presentation_info: new FormGroup(
        {
          date: new FormControl(),
          requested_by: new FormControl(),
          position: new FormControl(),
          primary_attorney: new FormControl(),
          staff_member_attending: new FormControl(),
          location: new FormControl(),
          mgmt_office: new FormControl(),
          method: new FormControl(),
          association_attendee: new FormControl(),
          issues_discussed: new FormControl(),
          presentation_time: new FormControl(),
          outcome: new FormControl(),
          hired: new FormControl(),
          reasons_selected_firm: new FormControl()
        },
      ),
      potential_client_status_report: new FormGroup(
        {
          pc_origination_date: new FormControl(),
          pc_origination_staff_initials: new FormControl(),
          staff_assigned: new FormControl(),
          newest_event_date: new FormControl(),
          newest_event_staff_initials: new FormControl(),
          follow_up_type: new FormControl(),
          next_follow_up_date: new FormControl(),
          next_follow_up_staff_initials: new FormControl(),
          file_type: new FormControl(),
          file_date: new FormControl(),
          contact_name: new FormControl(),
          position: new FormControl(),
          phone_number: new FormControl(),
          phone_ext: new FormControl(),
          info_notes: new FormControl(),

          current_legal_counsil: new FormControl(),
          other_firms_considered: new FormControl(),
          reason_for_leaving_current_council: new FormControl(),
          best_aspect_of_current_firm: new FormControl(),
          decision_expected_timeframe: new FormControl(),
          basis_of_decision: new FormControl(),
          sincere_request_3rd_party: new FormControl(),
          CM_notified_on_question: new FormControl(),
          association_selection_of_current_firm: new FormControl(),
          association_heard_CM: new FormControl(),
          what_event: new FormControl(),
          package_type_requested: new FormControl(),
          copy_to_name: new FormControl(),
          title: new FormControl(),
          mgmt_co: new FormControl(),
          copy_date: new FormControl(),
          chain_of_events: new FormControl(),
          chain_date: new FormControl(),
          work_originator: new FormControl(),
          inputters_initials: new FormControl(),
          input_date: new FormControl(),
          total_time_for_entry: new FormControl(),
          entry_notes: new FormControl(),

          file_closing_status: new FormControl(),
          file_closing_date: new FormControl(),
          remove_after: new FormControl(),
          closed_file_status: new FormControl(),
          starting_round_date: new FormControl(),
          ending_date: new FormControl(),
          closing_date: new FormControl(),
          total_time_spent: new FormControl(),
          firm_selected: new FormControl(),
          reason_other_firm_selected: new FormControl(),
          additional_reasons: new FormControl(),
          closing_letter: new FormControl(),
          CM_staff_final_thoughts: new FormControl()
        },
      ),
      final_notes: new FormGroup(
        {
          final_notes_entry: new FormControl()
        },
      )
    })
  }

  onSubmit()
  {
    this.saveDataToModel();
    this.malService.createMalEntry(this.malModel).subscribe(data =>{
      if(data.statusCode == 200){
        this.errorUpdatingMalForm = false;
      }
      else{
        this.errorUpdatingMalForm = true;
      }
    })
  }

  saveDataToModel(){
    this.malModel.LegalName =  this.updateMALForm.get("primary_information_group").get("legal_association_name").value;
    this.malModel.Aka = this.updateMALForm.get("primary_information_group").get("also_known_as").value;
    this.malModel.ClientAcctNum = this.updateMALForm.get("primary_information_group").get("client_account_number").value;
    this.malModel.FileName = this.updateMALForm.get("primary_information_group").get("file_name").value;
    this.malModel.StatusInFirm = this.updateMALForm.get("primary_information_group").get("status").value;
    this.malModel.SpecialClassification =  this.updateMALForm.get("primary_information_group").get("special_classification").value;
    this.malModel.AsscType = this.updateMALForm.get("primary_information_group").get("association_type").value;
    this.malModel.ScndMHPAssc = this.updateMALForm.get("primary_information_group").get("sec_association_type").value;
    this.malModel.DomicileCounty = this.updateMALForm.get("primary_information_group").get("domicile_county").value;
    this.malModel.DomicileCity =  this.updateMALForm.get("primary_information_group").get("domicile_city").value;
    this.malModel.DomicileZip = this.updateMALForm.get("primary_information_group").get("domicile_zip_code").value;

    this.malModel.SupplementalDesignatedSiteAddress = this.updateMALForm.get("supplement_association_info_group").get("association_address").value;
    this.malModel.SupplementalCity = this.updateMALForm.get("supplement_association_info_group").get("city").value;
    this.malModel.SupplementalZipCode = this.updateMALForm.get("supplement_association_info_group").get("zip_code").value;
    this.malModel.SupplementalPhoneNumber = this.updateMALForm.get("supplement_association_info_group").get("phone_number").value;
    this.malModel.SupplementalAssociationWebsite = this.updateMALForm.get("supplement_association_info_group").get("website").value;
    this.malModel.SupplementalAssociationEmail = this.updateMALForm.get("supplement_association_info_group").get("email_address").value;
    this.malModel.SupplementalNumberUnitsLotsDeveloped = this.updateMALForm.get("supplement_association_info_group").get("number_of_untis").value;
    this.malModel.SupplementalCommunity55Plus = this.updateMALForm.get("supplement_association_info_group").get("community_55_plus").value;
    this.malModel.SupplementalAssociationControlledBy = this.updateMALForm.get("supplement_association_info_group").get("association_controlled_by").value;
    this.malModel.SupplementalApproxTurnoverDate = this.updateMALForm.get("supplement_association_info_group").get("turnover_date").value;
    this.malModel.SupplementalMasterOrSub = this.updateMALForm.get("supplement_association_info_group").get("association_type").value;
    this.malModel.SupplementalSubAssociations = this.updateMALForm.get("supplement_association_info_group").get("sub_association_type").value;
    this.malModel.SupplementalMasterAssociation = this.updateMALForm.get("supplement_association_info_group").get("master_association_type").value;
    this.malModel.SupplementalRegisteredAgent = this.updateMALForm.get("supplement_association_info_group").get("registered_agent").value;
    this.malModel.SupplementalDateRA = this.updateMALForm.get("supplement_association_info_group").get("ra_date").value;
    this.malModel.SupplementalClubhouse = this.updateMALForm.get("supplement_association_info_group").get("clubhouse").value;
    this.malModel.SupplementalAssessments = this.updateMALForm.get("supplement_association_info_group").get("assessments").value;
    this.malModel.SupplementalWhatIntervals = this.updateMALForm.get("supplement_association_info_group").get("intervals").value;
    this.malModel.SupplementalAvailableToRent = this.updateMALForm.get("supplement_association_info_group").get("rent_availability").value;
    this.malModel.SupplementalPrice = this.updateMALForm.get("supplement_association_info_group").get("price").value;
    this.malModel.SupplementalTheaterSeatingAmount = this.updateMALForm.get("supplement_association_info_group").get("theater_seating").value;
    this.malModel.SupplementalTableChairsAmount = this.updateMALForm.get("supplement_association_info_group").get("tables_seating").value;
    this.malModel.SupplementalTypeOfTables = this.updateMALForm.get("supplement_association_info_group").get("type_of_tables").value;
    this.malModel.SupplementalAdditionalNotes = this.updateMALForm.get("supplement_association_info_group").get("additional_notes").value;

    this.malModel.GeneralCorporateStatus = this.updateMALForm.get("general_board_member_info").get("corporate_status").value;
    this.malModel.GeneralAnnualMeetingMonth = this.updateMALForm.get("general_board_member_info").get("annual_meeting_month").value;
    this.malModel.GeneralLastCorporateReportDate = this.updateMALForm.get("general_board_member_info").get("last_corporate_report_filed").value;
    this.malModel.GeneralCurrentBoardExpirationDate = this.updateMALForm.get("general_board_member_info").get("board_term_expiration").value;
    this.malModel.GeneralAssociationSeminarAdmittandance = this.updateMALForm.get("general_board_member_info").get("seminar_status").value;
    this.malModel.GeneralAssociationSeminarTagColor = this.updateMALForm.get("general_board_member_info").get("seminar_name_tag_color").value;
    this.malModel.GeneralNumberDirectorsFullyStaffed = this.updateMALForm.get("general_board_member_info").get("no_of_directors").value;
    this.malModel.GeneralDateAssociationUpdatedWhole = this.updateMALForm.get("general_board_member_info").get("association_updated_date").value;

    this.malModel.RepresentCmServicesRequest = this.updateMALForm.get("representation_inquiries").get("services_request").value;
    this.malModel.RepresentOriginationSource = this.updateMALForm.get("representation_inquiries").get("origination_source").value;
    this.malModel.RepresentCmSponsored = this.updateMALForm.get("representation_inquiries").get("cm_sponsored_organization").value;
    this.malModel.RepresentSource = this.updateMALForm.get("representation_inquiries").get("source").value;
    this.malModel.RepresentDateRequested = this.updateMALForm.get("representation_inquiries").get("date_requested").value;

    this.malModel.MugPurchaseStatus = this.updateMALForm.get("merchandise_purchases").get("mug_purchases").get("purchase_status").value;
    this.malModel.MugOriginationSaleSource = this.updateMALForm.get("merchandise_purchases").get("mug_purchases").get("sale_source").value;
    this.malModel.MugDatePurchased = this.updateMALForm.get("merchandise_purchases").get("mug_purchases").get("date_purchased").value;
    this.malModel.MugQuantity = this.updateMALForm.get("merchandise_purchases").get("mug_purchases").get("quantity").value;
    this.malModel.MugDeliveryMethod = this.updateMALForm.get("merchandise_purchases").get("mug_purchases").get("delivery_method").value;
    this.malModel.MugPaymentMethod = this.updateMALForm.get("merchandise_purchases").get("mug_purchases").get("payment_method").value;
    this.malModel.MugCheckNumber = this.updateMALForm.get("merchandise_purchases").get("mug_purchases").get("check_number").value;

    this.malModel.StatueStatusPurchase = this.updateMALForm.get("merchandise_purchases").get("florida_statue_service").get("purchase_status").value;
    this.malModel.StatueRequestedDate = this.updateMALForm.get("merchandise_purchases").get("florida_statue_service").get("date_requested").value;
    this.malModel.StatueQuantity = this.updateMALForm.get("merchandise_purchases").get("florida_statue_service").get("quantity").value;
    this.malModel.StatueWhichBook = this.updateMALForm.get("merchandise_purchases").get("florida_statue_service").get("which_book").value;
    this.malModel.StatueReferralSource = this.updateMALForm.get("merchandise_purchases").get("florida_statue_service").get("referral").value;
    this.malModel.StatueReferralSourceOther = this.updateMALForm.get("merchandise_purchases").get("florida_statue_service").get("referral_other").value;
    this.malModel.StatueSoldBy = this.updateMALForm.get("merchandise_purchases").get("florida_statue_service").get("sold_by").value;
    this.malModel.StatueDeliveryMethod = this.updateMALForm.get("merchandise_purchases").get("florida_statue_service").get("delivery_method").value;
    this.malModel.StatuePaymentMethod = this.updateMALForm.get("merchandise_purchases").get("florida_statue_service").get("payment_method").value;
    this.malModel.StatueCheckNumber = this.updateMALForm.get("merchandise_purchases").get("florida_statue_service").get("check_number").value;

    this.malModel.SocialNoSocialMedia = this.updateMALForm.get("social_media").get("social_media").value;
    this.malModel.SocialHasFacebook = this.updateMALForm.get("social_media").get("has_facebook").value;
    this.malModel.SocialFacebookAccount = this.updateMALForm.get("social_media").get("facebook_account_name").value;
    this.malModel.SocialFacebookDate = this.updateMALForm.get("social_media").get("facebook_date").value;
    this.malModel.SocialHasLinkedin = this.updateMALForm.get("social_media").get("has_linkedin").value;
    this.malModel.SocialLinkedinAccount = this.updateMALForm.get("social_media").get("linkedin_account_name").value;
    this.malModel.SocialLinkedinDate = this.updateMALForm.get("social_media").get("linkedin_date").value;
    this.malModel.SocialHasTwitter = this.updateMALForm.get("social_media").get("has_twitter").value;
    this.malModel.SocialTwitterAccount = this.updateMALForm.get("social_media").get("twitter_account_name").value;
    this.malModel.SocialTwitterDate = this.updateMALForm.get("social_media").get("twitter_date").value;
    this.malModel.SocialHasInstagram = this.updateMALForm.get("social_media").get("has_instagram").value;
    this.malModel.SocialInstagramAccount = this.updateMALForm.get("social_media").get("instagram_account_name").value;
    this.malModel.SocialInstagramDate = this.updateMALForm.get("social_media").get("instagram_date").value;

    this.malModel.HiringDateHired = this.updateMALForm.get("hiring_info").get("date_hired").value;
    this.malModel.HiringReasonsHired = this.updateMALForm.get("hiring_info").get("reason_hired").value;
    this.malModel.HiringComments = this.updateMALForm.get("hiring_info").get("hiring_comments").value;
    this.malModel.HiringTypeofRepresentation = this.updateMALForm.get("hiring_info").get("type_of_representation").value;
    this.malModel.HiringDate = this.updateMALForm.get("hiring_info").get("date").value;
    this.malModel.HiringSourceOfReferralName = this.updateMALForm.get("hiring_info").get("referral_name").value;
    this.malModel.HiringPosition = this.updateMALForm.get("hiring_info").get("position").value;
    this.malModel.HiringCompanyAssociation = this.updateMALForm.get("hiring_info").get("company").value;
    this.malModel.HiringPrimaryFirm = this.updateMALForm.get("hiring_info").get("primary_firm").value;
    this.malModel.HiringOtherFirms = this.updateMALForm.get("hiring_info").get("other_firms").value;
    this.malModel.HiringForWhatPurpose = this.updateMALForm.get("hiring_info").get("purpose").value;
    this.malModel.HiringFormerFirm = this.updateMALForm.get("hiring_info").get("former_firm").value;

    this.malModel.TerminationDateTerminated = this.updateMALForm.get("termination_info").get("date_terminated").value;
    this.malModel.TerminationReasonTerminated = this.updateMALForm.get("termination_info").get("reason_terminated").value;
    this.malModel.TerminationRevenueGenerated = this.updateMALForm.get("termination_info").get("revenue_generated").value;
    this.malModel.TerminationTerminatingNotes = this.updateMALForm.get("termination_info").get("terminating_notes").value;
    this.malModel.TerminationOrigin = this.updateMALForm.get("termination_info").get("termination_origin").value;

    this.malModel.SourceDate = this.updateMALForm.get("referrals").get("referrals_to_CM").get("date").value;
    this.malModel.SourceReferredBy = this.updateMALForm.get("referrals").get("referrals_to_CM").get("referred_by").value;
    this.malModel.SourcePosition = this.updateMALForm.get("referrals").get("referrals_to_CM").get("position").value;
    this.malModel.SourceCompany = this.updateMALForm.get("referrals").get("referrals_to_CM").get("company").value;
    this.malModel.SourceIfOrganizationMeeting = this.updateMALForm.get("referrals").get("referrals_to_CM").get("meeting").value;

    this.malModel.MgmtRequestDate = this.updateMALForm.get("referrals").get("referrals_from_CM").get("date").value;
    this.malModel.MgmtRequestedBy = this.updateMALForm.get("referrals").get("referrals_from_CM").get("referral_requested_by").value;
    this.malModel.MgmtTitle = this.updateMALForm.get("referrals").get("referrals_from_CM").get("title").value;
    this.malModel.MgmtForWhatBusiness = this.updateMALForm.get("referrals").get("referrals_from_CM").get("business").value;

    this.malModel.PresentationDate = this.updateMALForm.get("presentation_info").get("date").value;
    this.malModel.PresentationRequestedBy = this.updateMALForm.get("presentation_info").get("requested_by").value;
    this.malModel.PresentationPosition = this.updateMALForm.get("presentation_info").get("position").value;
    this.malModel.PresentationPrimaryAttorney = this.updateMALForm.get("presentation_info").get("primary_attorney").value;
    this.malModel.PresentationStaffMemberAttending = this.updateMALForm.get("presentation_info").get("staff_member_attending").value;
    this.malModel.PresentationLocation = this.updateMALForm.get("presentation_info").get("location").value;
    this.malModel.PresentationMgmtCoAndOffice = this.updateMALForm.get("presentation_info").get("mgmt_office").value;
    this.malModel.PresentationMethod = this.updateMALForm.get("presentation_info").get("method").value;
    this.malModel.PresentationWhoAttendedFromAssociation = this.updateMALForm.get("presentation_info").get("association_attendee").value;
    this.malModel.PresentationIssuesDiscussed = this.updateMALForm.get("presentation_info").get("issues_discussed").value;
    this.malModel.PresentationTotalPresentationTime = this.updateMALForm.get("presentation_info").get("presentation_time").value;
    this.malModel.PresentationOutcome = this.updateMALForm.get("presentation_info").get("outcome").value;
    this.malModel.PresentationHired = this.updateMALForm.get("presentation_info").get("hired").value;
    this.malModel.PresentationReasonsFirmSelected = this.updateMALForm.get("presentation_info").get("reasons_selected_firm").value;

    this.malModel.PotentialOriginationDatePC = this.updateMALForm.get("potential_client_status_report").get("pc_origination_date").value;
    this.malModel.PotentialStaffInitialsPC = this.updateMALForm.get("potential_client_status_report").get("pc_origination_staff_initials").value;
    this.malModel.PotentialStaffAssignedPC = this.updateMALForm.get("potential_client_status_report").get("staff_assigned").value;
    this.malModel.PotentialNewestEventDate = this.updateMALForm.get("potential_client_status_report").get("newest_event_date").value;
    this.malModel.PotentialStaffInitialsEvent = this.updateMALForm.get("potential_client_status_report").get("newest_event_staff_initials").value;
    this.malModel.PotentialFollowUpType = this.updateMALForm.get("potential_client_status_report").get("follow_up_type").value;
    this.malModel.PotentialNextFollowUpDate = this.updateMALForm.get("potential_client_status_report").get("next_follow_up_date").value;
    this.malModel.PotentialStaffInitialsFollowUp = this.updateMALForm.get("potential_client_status_report").get("next_follow_up_staff_initials").value;
    this.malModel.PotentialFileType = this.updateMALForm.get("potential_client_status_report").get("file_type").value;
    this.malModel.PotentialFileDate = this.updateMALForm.get("potential_client_status_report").get("file_date").value;
    this.malModel.PotentialContactName = this.updateMALForm.get("potential_client_status_report").get("contact_name").value;
    this.malModel.PotentialPosition = this.updateMALForm.get("potential_client_status_report").get("position").value;
    this.malModel.PotentialPhoneNumber = this.updateMALForm.get("potential_client_status_report").get("phone_number").value;
    this.malModel.PotentialExtension = this.updateMALForm.get("potential_client_status_report").get("phone_ext").value;
    this.malModel.PotentialInfoNote = this.updateMALForm.get("potential_client_status_report").get("info_notes").value;
    this.malModel.PotentialCurrentLegalCouncil = this.updateMALForm.get("potential_client_status_report").get("current_legal_counsil").value;
    this.malModel.PotentialOtherFirmsConsidered = this.updateMALForm.get("potential_client_status_report").get("other_firms_considered").value;
    this.malModel.PotentialReasonForLeavingCurrent = this.updateMALForm.get("potential_client_status_report").get("reason_for_leaving_current_council").value;
    this.malModel.PotentialBestAspectCurrent = this.updateMALForm.get("potential_client_status_report").get("best_aspect_of_current_firm").value;
    this.malModel.PotentialDecisionExpected = this.updateMALForm.get("potential_client_status_report").get("decision_expected_timeframe").value;
    this.malModel.PotentialDecisionBasis = this.updateMALForm.get("potential_client_status_report").get("basis_of_decision").value;
    this.malModel.PotentialSincereRequest3rdParty = this.updateMALForm.get("potential_client_status_report").get("sincere_request_3rd_party").value;
    this.malModel.PotentialCMNotifiedOnDecision = this.updateMALForm.get("potential_client_status_report").get("CM_notified_on_question").value;
    this.malModel.PotentialCurrentFirmSelection = this.updateMALForm.get("potential_client_status_report").get("association_selection_of_current_firm").value;
    this.malModel.PotentialAssociationHeardCM = this.updateMALForm.get("potential_client_status_report").get("association_heard_CM").value;
    this.malModel.PotentialWhatEvent = this.updateMALForm.get("potential_client_status_report").get("what_event").value;
    this.malModel.PotentialPackageTypeRequested = this.updateMALForm.get("potential_client_status_report").get("package_type_requested").value;
    this.malModel.PotentialCopyToName = this.updateMALForm.get("potential_client_status_report").get("copy_to_name").value;
    this.malModel.PotentialTitle = this.updateMALForm.get("potential_client_status_report").get("title").value;
    this.malModel.PotentialMgmtCo = this.updateMALForm.get("potential_client_status_report").get("mgmt_co").value;
    this.malModel.PotentialCopyDate = this.updateMALForm.get("potential_client_status_report").get("copy_date").value;
    this.malModel.PotentialEventsChain = this.updateMALForm.get("potential_client_status_report").get("chain_of_events").value;
    this.malModel.PotentialChainDate = this.updateMALForm.get("potential_client_status_report").get("chain_date").value;
    this.malModel.PotentialChainOriginator = this.updateMALForm.get("potential_client_status_report").get("work_originator").value;
    this.malModel.PotentialChainInitials = this.updateMALForm.get("potential_client_status_report").get("inputters_initials").value;
    this.malModel.PotentialChainInputDate = this.updateMALForm.get("potential_client_status_report").get("input_date").value;
    this.malModel.PotentialEntryTotalTime = this.updateMALForm.get("potential_client_status_report").get("total_time_for_entry").value;
    this.malModel.PotentialEntryNotes = this.updateMALForm.get("potential_client_status_report").get("entry_notes").value;
    this.malModel.PotentialFileClosingStatus = this.updateMALForm.get("potential_client_status_report").get("file_closing_status").value;
    this.malModel.PotentialFileClosingDate = this.updateMALForm.get("potential_client_status_report").get("file_closing_date").value;
    this.malModel.PotentialFileRemoveAfter = this.updateMALForm.get("potential_client_status_report").get("remove_after").value;
    this.malModel.PotentialClosedFileStatus = this.updateMALForm.get("potential_client_status_report").get("closed_file_status").value;
    this.malModel.PotentialStartingRoundDate = this.updateMALForm.get("potential_client_status_report").get("starting_round_date").value;
    this.malModel.PotentialEndingDate = this.updateMALForm.get("potential_client_status_report").get("ending_date").value;
    this.malModel.PotentialClosingDate = this.updateMALForm.get("potential_client_status_report").get("closing_date").value;
    this.malModel.PotentialSpentTotalTime = this.updateMALForm.get("potential_client_status_report").get("total_time_spent").value;
    this.malModel.PotentialFirmSelected = this.updateMALForm.get("potential_client_status_report").get("firm_selected").value;
    this.malModel.PotentialFirmSelectedOtherWhy = this.updateMALForm.get("potential_client_status_report").get("reason_other_firm_selected").value;
    this.malModel.PotentialOtherFirmAdditionalReasons = this.updateMALForm.get("potential_client_status_report").get("additional_reasons").value;
    this.malModel.PotentialClosingLetter = this.updateMALForm.get("potential_client_status_report").get("closing_letter").value;
    this.malModel.PotentialFinalStaffThoughts = this.updateMALForm.get("potential_client_status_report").get("CM_staff_final_thoughts").value;

    this.malModel.FinalNotes = this.updateMALForm.get("final_notes").get("final_notes_entry").value;
  }

  openNew() {
    this.inquiry = {};
    this.submitted = false;
    this.inquiriesDialog = true;
  }

  editInquiry(inquiry: Inquiry) {
    this.inquiry = {...inquiry};
    this.inquiriesDialog = true;
  }

  deleteInquiry(inquiry: Inquiry) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + inquiry.entryId + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.inquiries = this.inquiries.filter(val => val.entryId !== inquiry.entryId);
        this.inquiry = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'inquiry Deleted', life: 3000});
      }
    });
  }

  hideDialog() {
    this.inquiriesDialog = false;
    this.submitted = false;
  }

  saveInquiry() {
    this.submitted = true;

    // if (this.inquiry.name.trim()) {
    //   if (this.inquiry.entryId) {
    //     this.inquiries[this.findIndexById(this.inquiry.entryId)] = this.inquiry;
    //     this.messageService.add({severity:'success', summary: 'Successful', detail: 'inquiry Updated', life: 3000});
    //   }
    //   else {
    //     this.inquiry.entryId = this.createId();
    //     this.inquiries.push(this.inquiry);
    //     this.messageService.add({severity:'success', summary: 'Successful', detail: 'inquiry Created', life: 3000});
    //   }
    //
    //   this.inquiries = [...this.inquiries];
    //   this.inquiriesDialog = false;
    //   this.inquiry = {};
    // }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.inquiries.length; i++) {
      if (this.inquiries[i].entryId === id) {
        index = i;
        break;
      }
    }

    return index;
  }

}

export interface Inquiry {
  entryId?:string;
  servicesRequest?:string;
  originationSource?:string;
  cmSponsored?:string;
  source?:string;
  date?:string;

}
