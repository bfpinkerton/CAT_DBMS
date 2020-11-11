export class malDataModel {
    //Primary Association Information
    LegalName: string;
    Aka: string;
    ClientAcctNum: number;
    FileName: string;
    StatusInFirm: string;
    SpecialClassification: string;
    AsscType: string;
    ScndMHPAssc: string;
    DomicileCounty: string;
    DomicileCity: string;
    DomicileZip: number;

    //Supplemental Association Information
    SupplementalDesignatedSiteAddress: string;
    SupplementalCity: string;
    SupplementalZipCode: number;
    SupplementalPhoneNumber: number;
    SupplementalAssociationWebsite: string;
    SupplementalAssociationEmail: string;
    SupplementalNumberUnitsLotsDeveloped: string;
    SupplementalCommunity55Plus: string;
    SupplementalAssociationControlledBy: string;
    SupplementalApproxTurnoverDate: string;
    SupplementalMasterOrSub: string;
    SupplementalSubAssociations: string;
    SupplementalMasterAssociation: string;
    SupplementalRegisteredAgent: string;
    SupplementalDateRA: string;
    SupplementalClubhouse: string;
    SupplementalAssessments: string;
    SupplementalWhatIntervals: string;
    SupplementalAvailableToRent: string;
    SupplementalPrice: string;
    SupplementalTheaterSeatingAmount: number;
    SupplementalTableChairsAmount: number;
    SupplementalTypeOfTables: string;
    SupplementalAdditionalNotes: string;

    //General Board Member Related Information
    GeneralCorporateStatus: string;
    GeneralAnnualMeetingMonth: string;
    GeneralLastCorporateReportDate: string;
    GeneralCurrentBoardExpirationDate: string;
    GeneralAssociationSeminarAdmittandance: string;
    GeneralAssociationSeminarTagColor: string;
    GeneralNumberDirectorsFullyStaffed: number;
    GeneralDateAssociationUpdatedWhole: string;

    //Representation Inquiries
    RepresentCmServicesRequest: string;
    RepresentOriginationSource: string;
    RepresentCmSponsored: string;
    RepresentSource: string;
    RepresentDateRequested: string;

    //Merchandise Purchases
    //Mug Purchases
    MugPurchaseStatus: string;
    MugOriginationSaleSource: string;
    MugDatePurchased: string;
    MugQuantity: string;
    MugDeliveryMethod: string;
    MugPaymentMethod: string;
    MugCheckNumber: string;

    //Florida Statue Service
    StatueStatusPurchase: string;
    StatueRequestedDate: string;
    StatueQuantity: string;
    StatueWhichBook: string;
    StatueReferralSource: string;
    StatueReferralSourceOther: string;
    StatueSoldBy: string;
    StatueDeliveryMethod: string;
    StatuePaymentMethod: string;
    StatueCheckNumber: string;

    //Social Media; Birthdays and Contents
    SocialNoSocialMedia: string;
    SocialHasFacebook: string;
    SocialFacebookAccount: string;
    SocialFacebookDate: string;
    SocialHasLinkedin: string;
    SocialLinkedinAccount: string;
    SocialLinkedinDate: string;
    SocialHasTwitter: string;
    SocialTwitterAccount: string;
    SocialTwitterDate: string;
    SocialHasInstagram: string;
    SocialInstagramAccount: string;
    SocialInstagramDate: string;

    //Hiring Information
    HiringDateHired: string;
    HiringReasonsHired: string;
    HiringComments: string;
    HiringTypeofRepresentation: string;
    HiringDate: string;
    HiringSourceOfReferralName: string;
    HiringPosition: string;
    HiringCompanyAssociation: string;
    HiringPrimaryFirm: string;
    HiringOtherFirms: string;
    HiringForWhatPurpose: string;
    HiringFormerFirm: string;

    //Termination Information
    TerminationDateTerminated: string;
    TerminationReasonTerminated: string;
    TerminationRevenueGenerated: string;
    TerminationTerminatingNotes: string;
    TerminationOrigin: string;
    TerminationRealReasonTerminated: string;

    //Referrals
    //Source of Referral to C&M
    SourceDate: string;
    SourceReferredBy: string;
    SourcePosition: string;
    SourceCompany: string;
    SourceIfOrganizationMeeting: string;

    //Referrals from C&M
    MgmtRequestDate: string;
    MgmtRequestedBy: string;
    MgmtTitle: string;
    MgmtForWhatBusiness: string;

    //Presentation Information
    PresentationDate: string;
    PresentationRequestedBy: string;
    PresentationPosition: string;
    PresentationPrimaryAttorney: string;
    PresentationStaffMemberAttending: string;
    PresentationLocation: string;
    PresentationMgmtCoAndOffice: string;
    PresentationMethod: string;
    PresentationWhoAttendedFromAssociation: string;
    PresentationIssuesDiscussed: string;
    PresentationTotalPresentationTime: string;
    PresentationOutcome: string;
    PresentationHired: string;
    PresentationReasonsFirmSelected: string;

    //Potential Client Status Report
    PotentialOriginationDatePC: string;
    PotentialStaffInitialsPC: string;
    PotentialStaffAssignedPC: string;
    PotentialNewestEventDate: string;
    PotentialStaffInitialsEvent: string;
    PotentialFollowUpType: string;
    PotentialNextFollowUpDate: string;
    PotentialStaffInitialsFollowUp: string;
    PotentialFileType: string;
    PotentialFileDate: string;
    PotentialContactName: string;
    PotentialPosition: string;
    PotentialPhoneNumber: number;
    PotentialExtension: number;
    PotentialInfoNote: string;
    PotentialCurrentLegalCouncil: string;
    PotentialOtherFirmsConsidered: string;
    PotentialReasonForLeavingCurrent: string;
    PotentialBestAspectCurrent: string;
    PotentialDecisionExpected: string;
    PotentialDecisionBasis: string;
    PotentialSincereRequest3rdParty: string;
    PotentialCMNotifiedOnDecision: string;
    PotentialCurrentFirmSelection: string;
    PotentialAssociationHeardCM: string;
    PotentialWhatEvent: string;
    PotentialPackageTypeRequested: string;
    PotentialCopyToName: string;
    PotentialTitle: string;
    PotentialMgmtCo: string;
    PotentialCopyDate: string;
    PotentialEventsChain: string;
    PotentialChainDate: string;
    PotentialChainOriginator: string;
    PotentialChainInitials: string;
    PotentialChainInputDate: string;
    PotentialEntryTotalTime: string;
    PotentialEntryNotes: string;
    PotentialFileClosingStatus: string;
    PotentialFileClosingDate: string;
    PotentialFileRemoveAfter: string;
    PotentialClosedFileStatus: string;
    PotentialStartingRoundDate: string;
    PotentialEndingDate: string;
    PotentialClosingDate: string;
    PotentialSpentTotalTime: string;
    PotentialFirmSelected: string;
    PotentialFirmSelectedOtherWhy: string;
    PotentialOtherFirmAdditionalReasons: string;
    PotentialClosingLetter: string;
    PotentialFinalStaffThoughts: string;

    //Final Notes section
    FinalNotes: string
}
