/*
    ROUTING MODEL for MCD
*/

const express = require('express');
const router = express.Router();
const passport = require('passport');
const moment = require('moment');
const db = require("../models");

const multer = require('multer');
const upload = multer();
const open = require('open');

// User model
const User = db.users;
const MCD = db.mcd;
const Update = db.updates;
const Corporate = db.corporate;
const CorporateStatus = db.corporateStatus;
const CorporateContact = db.corporateContact;
const BranchOffice = db.branchOffice;
const CMReferralsToMgmtCo = db.cmReferralsToMgmtCo;
const MgmtCoReferralsToCM = db.mgmtCoReferralsToCM;

// Ensure authenticated user is logged in
const {
    ensureAuthenticated
} = require('../config/auth');

// Ensure user does not have readOnly
const {
    ensureReadOnlyMCD
} = require('../config/readOnlyMCD');

// ------------------------------------------------------------------

// GET home page
router.get('/dashboard', ensureAuthenticated, async function (req, res, next) {
    req.flash('success', "Please choose a utility from the sidebar");
    res.locals.message = req.flash();
    req.app.locals.user = req.user;
    // var date = moment().format('MMMM Do YYYY');
    res.render('pages/mcd/dashboard', );
});

// GET create page
router.get('/create', ensureReadOnlyMCD, async function (req, res, next) {
    req.app.locals.user = req.user;
    req.app.locals.date = moment().format('MMMM Do YYYY');
    res.render('pages/mcd/create', );
});






// Branch Office Section --------------------------------------
// Create MCD Entry's Branch Office
router.post('/create/', ensureReadOnlyMCD, function (req, res, next) {
    const {
        ReferralStatusToMgmtCo,
        BranchOffice,
        ReferralStatusToCM,
        Address,
        City,
        County,
        Phone,
        Fax,
        TollFree,
        NumberOfManagers,
        NumberOfAssociations,
        NumberOfClients,
        NumberOfPotentialClients,
        CountiesServiced,
        FavoriteFirms,
        Date,
        Notes,
    } = req.body;
    // Record attributes and Replace all empty string values with NULL
    var entry = emptyStringToNull({
        MCDrelatedID: req.params.MCD_id,
        referralStatusToMgmtCo: ReferralStatusToCM,
        branchOffice: BranchOffice,
        referralStatusToCM: ReferralStatusToCM,
        address: Address,
        city: City,
        county: County,
        phone: Phone,
        fax: Fax,
        tollFree: TollFree,
        numberOfManagers: NumberOfManagers,
        numberOfAssociations: NumberOfAssociations,
        numberOfClients: NumberOfClients,
        numberOfPotentialClients: NumberOfPotentialClients,
        countiesServiced: CountiesServiced,
        favoriteFirms: FavoriteFirms,
        date: Date,
        notes: Notes,
    });
    // Create new BranchOffice record
    BranchOffice.create(entry)
        .catch(err => {
            console.log(err);
            req.flash('failure','New MCD entry\'s *mcd_BranchOffice* record not added.');
        });

    res.redirect("../../entry/" + req.params.MCD_id);
});
// Update MCD Entry's Branch Office
router.post('/entry/', ensureReadOnlyMCD, async function (req, res, next) {
    const {
        ReferralStatusToMgmtCo,
        BranchOffice,
        ReferralStatusToCM,
        Address,
        City,
        County,
        Phone,
        Fax,
        TollFree,
        NumberOfManagers,
        NumberOfAssociations,
        NumberOfClients,
        NumberOfPotentialClients,
        CountiesServiced,
        FavoriteFirms,
        Date,
        Notes,
    } = req.body;
    // Record attributes and Replace all empty string values with NULL
    var entry = emptyStringToNull({
        referralStatusToMgmtCo: ReferralStatusToCM,
        branchOffice: BranchOffice,
        referralStatusToCM: ReferralStatusToCM,
        address: Address,
        city: City,
        county: County,
        phone: Phone,
        fax: Fax,
        tollFree: TollFree,
        numberOfManagers: NumberOfManagers,
        numberOfAssociations: NumberOfAssociations,
        numberOfClients: NumberOfClients,
        numberOfPotentialClients: NumberOfPotentialClients,
        countiesServiced: CountiesServiced,
        favoriteFirms: FavoriteFirms,
        date: Date,
        notes: Notes,
    });
    // update record
    await BranchOffice.update(entry, {where: {id:req.params.BranchOffice_id}})
        .catch(err => {
            console.log(err);
            req.flash('failure','Update MCD entry\'s *mcd_BranchOffice* record failed.');
        });

    res.redirect("../../entry/" + req.params.MCD_id);
});



// CM Referalls To Mgmt Co Section --------------------------------------
// Create MCD Entry's CM Referalls To Mgmt Co
router.post('/create/', ensureReadOnlyMCD, function (req, res, next) {
    const {
        Date,
        AssociationReferred,
        AssociationContactPerson,
        AssociationContactTitle,
        AnticipatedDateOfAssociationDecision,
        MgmtCoEmployeeReceivingReferral,
        MgmtCoEmployeeReceivingReferralTitle,
        BranchOffice,
        Accepted,
        MgmtCoConversationNotes,
        HireCompany,
        HireCompanyDate,
        HireCompanyReason,
        AssociationHired,
    } = req.body;
    // Record attributes and Replace all empty string values with NULL
    var entry = emptyStringToNull({
        MCDrelatedID: req.params.MCD_id,
        date: Date,
        associationReferred: AssociationReferred,
        associationContactPerson: AssociationContactPerson,
        associationContactTitle: AssociationContactTitle,
        anticipatedDateOfAssociationDecision: AnticipatedDateOfAssociationDecision,
        mgmtCoEmployeeReceivingReferral: MgmtCoEmployeeReceivingReferral,
        mgmtCoEmployeeReceivingReferralTitle: MgmtCoEmployeeReceivingReferralTitle,
        branchOffice: BranchOffice,
        accepted: Accepted,
        mgmtCoConversationNotes: MgmtCoConversationNotes,
        hireCompany: HireCompany,
        hireCompanyDate: HireCompanyDate,
        hireCompanyReason: HireCompanyReason,
        associationHired: AssociationHired,
    });
    // Create new CMReferralsToMgmtCo record
    CMReferralsToMgmtCo.create(entry)
        .catch(err => {
            console.log(err);
            req.flash('failure','New MCD entry\'s *mcd_CMReferralsToMgmtCo* record not added.');
        });

    res.redirect("../../entry/" + req.params.MCD_id);
});
// Update MCD Entry's CM Referalls To Mgmt Co
router.post('/entry/', ensureReadOnlyMCD, async function (req, res, next) {
    const {
        Date,
        AssociationReferred,
        AssociationContactPerson,
        AssociationContactTitle,
        AnticipatedDateOfAssociationDecision,
        MgmtCoEmployeeReceivingReferral,
        MgmtCoEmployeeReceivingReferralTitle,
        BranchOffice,
        Accepted,
        MgmtCoConversationNotes,
        HireCompany,
        HireCompanyDate,
        HireCompanyReason,
        AssociationHired,
    } = req.body;
    // Record attributes and Replace all empty string values with NULL
    var entry = emptyStringToNull({
        date: Date,
        associationReferred: AssociationReferred,
        associationContactPerson: AssociationContactPerson,
        associationContactTitle: AssociationContactTitle,
        anticipatedDateOfAssociationDecision: AnticipatedDateOfAssociationDecision,
        mgmtCoEmployeeReceivingReferral: MgmtCoEmployeeReceivingReferral,
        mgmtCoEmployeeReceivingReferralTitle: MgmtCoEmployeeReceivingReferralTitle,
        branchOffice: BranchOffice,
        accepted: Accepted,
        mgmtCoConversationNotes: MgmtCoConversationNotes,
        hireCompany: HireCompany,
        hireCompanyDate: HireCompanyDate,
        hireCompanyReason: HireCompanyReason,
        associationHired: AssociationHired,
    });
    // update record
    await CMReferralsToMgmtCo.update(entry, {where: {id:req.params.CMReferralsToMgmtCo_id}})
        .catch(err => {
            console.log(err);
            req.flash('failure','Update MCD entry\'s *mcd_CMReferralsToMgmtCo* record failed.');
        });

    res.redirect("../../entry/" + req.params.MCD_id);
});



// Corporate Section --------------------------------------
// Create MCD Entry's Corporate
router.post('/create/', ensureReadOnlyMCD, function (req, res, next) {
    const {
        TotalMgrs,
        TotalAssociationClients,
        NumberClientAssociations,
        ServicesDescription,
        CountiesServiced,
    } = req.body;
    // Record attributes and Replace all empty string values with NULL
    var entry = emptyStringToNull({
        MCDrelatedID: req.params.MCD_id,
        totalMgrs: TotalMgrs,
        totalAssociationClients: TotalAssociationClients,
        numberClientAssociations: NumberClientAssociations,
        servicesDescription: ServicesDescription,
        countiesServiced: CountiesServiced,
    });
    // Create new Corporate record
    Corporate.create(entry)
        .catch(err => {
            console.log(err);
            req.flash('failure','New MCD entry\'s *mcd_Corporate* record not added.');
        });

    res.redirect("../../entry/" + req.params.MCD_id);
});
// Update MCD Entry's
router.post('/entry/', ensureReadOnlyMCD, async function (req, res, next) {
    const {
        TotalMgrs,
        TotalAssociationClients,
        NumberClientAssociations,
        ServicesDescription,
        CountiesServiced,
    } = req.body;
    // Record attributes and Replace all empty string values with NULL
    var entry = emptyStringToNull({
        totalMgrs: TotalMgrs,
        totalAssociationClients: TotalAssociationClients,
        numberClientAssociations: NumberClientAssociations,
        servicesDescription: ServicesDescription,
        countiesServiced: CountiesServiced,
    });
    // update record
    await Corporate.update(entry, {where: {id:req.params.Corporate_id}})
        .catch(err => {
            console.log(err);
            req.flash('failure','Update MCD entry\'s *mcd_Corporate* record failed.');
        });

    res.redirect("../../entry/" + req.params.MCD_id);
});


// Corporate Contact Section --------------------------------------
// Create MCD Entry's Corporate Contact
router.post('/create/', ensureReadOnlyMCD, function (req, res, next) {
    const {
        Name,
        Title,
        Phone,
        Fax,
        TollFree,
        Website,
        EmailStyle,
        CompanyManages,
    } = req.body;
    // Record attributes and Replace all empty string values with NULL
    var entry = emptyStringToNull({
        MCDrelatedID: req.params.MCD_id,
        name: Name,
        title: Title,
        phone: Phone,
        fax: Fax,
        tollFree: TollFree,
        website: Website,
        emailStyle: EmailStyle,
        companyManages: CompanyManages,
    });
    // Create new CorporateContact record
    CorporateContact.create(entry)
        .catch(err => {
            console.log(err);
            req.flash('failure','New MCD entry\'s *mcd_CorporateContact* record not added.');
        });

    res.redirect("../../entry/" + req.params.MCD_id);
});
// Update MCD Entry's Corporate Contact
router.post('/entry/', ensureReadOnlyMCD, async function (req, res, next) {
    const {
        Name,
        Title,
        Phone,
        Fax,
        TollFree,
        Website,
        EmailStyle,
        CompanyManages,
    } = req.body;
    // Record attributes and Replace all empty string values with NULL
    var entry = emptyStringToNull({
        name: Name,
        title: Title,
        phone: Phone,
        fax: Fax,
        tollFree: TollFree,
        website: Website,
        emailStyle: EmailStyle,
        companyManages: CompanyManages,
    });
    // update record
    await CorporateContact.update(entry, {where: {id:req.params.CorporateContact_id}})
        .catch(err => {
            console.log(err);
            req.flash('failure','Update MCD entry\'s *mcd_CorporateContact* record failed.');
        });

    res.redirect("../../entry/" + req.params.MCD_id);
});



// Corporate Status Section --------------------------------------
// Create MCD Entry's Corporate Status
router.post('/create/', ensureReadOnlyMCD, function (req, res, next) {
    const {
        LegalName,
        DoingBusinessAs,
        OriginalLicenseDate,
        EffectiveDate,
        ExpirationDate,
        CorporateDomicileCounty,
        CorporateDomicileAddress,
        CorporateDomicileCity,
        CorporateDomicileState,
        CorporateDomicileZip,
    } = req.body;
    // Record attributes and Replace all empty string values with NULL
    var entry = emptyStringToNull({
        MCDrelatedID: req.params.MCD_id,
        legalName: LegalName,
        doingBusinessAs: DoingBusinessAs,
        originalLicenseDate: OriginalLicenseDate,
        effectiveDate: EffectiveDate,
        expirationDate: ExpirationDate,
        corporateDomicileCounty: CorporateDomicileCounty,
        corporateDomicileAddress: CorporateDomicileAddress,
        corporateDomicileCity: CorporateDomicileCity,
        corporateDomicileState: CorporateDomicileState,
        corporateDomicileZip: CorporateDomicileZip,
    });
    // Create new CorporateStatus record
    CorporateStatus.create(entry)
        .catch(err => {
            console.log(err);
            req.flash('failure','New MCD entry\'s *mcd_CorporateStatus* record not added.');
        });

    res.redirect("../../entry/" + req.params.MCD_id);
});
// Update MCD Entry's Corporate Status
router.post('/entry/', ensureReadOnlyMCD, async function (req, res, next) {
    const {
        LegalName,
        DoingBusinessAs,
        OriginalLicenseDate,
        EffectiveDate,
        ExpirationDate,
        CorporateDomicileCounty,
        CorporateDomicileAddress,
        CorporateDomicileCity,
        CorporateDomicileState,
        CorporateDomicileZip,
    } = req.body;
    // Record attributes and Replace all empty string values with NULL
    var entry = emptyStringToNull({
        legalName: LegalName,
        doingBusinessAs: DoingBusinessAs,
        originalLicenseDate: OriginalLicenseDate,
        effectiveDate: EffectiveDate,
        expirationDate: ExpirationDate,
        corporateDomicileCounty: CorporateDomicileCounty,
        corporateDomicileAddress: CorporateDomicileAddress,
        corporateDomicileCity: CorporateDomicileCity,
        corporateDomicileState: CorporateDomicileState,
        corporateDomicileZip: CorporateDomicileZip,
    });
    // update record
    await CorporateStatus.update(entry, {where: {id:req.params.CorporateStatus_id}})
        .catch(err => {
            console.log(err);
            req.flash('failure','Update MCD entry\'s *mcd_CorporateStatus* record failed.');
        });

    res.redirect("../../entry/" + req.params.MCD_id);
});



// Mgmt Co Referrals To CM Section --------------------------------------
// Create MCD Entry's Mgmt Co Referrals To CM
router.post('/create/', ensureReadOnlyMCD, function (req, res, next) {
    const {
        Date,
        Association,
        ReferringManager,
        ReferringManagerTitle,
        BranchOffice,
        Note,
        WhoElseConsidered,
        PossibleHireNotes,
        GenuineOrThirdBid,
        FirmHired,
        HiringDecisionNotes,
    } = req.body;
    // Record attributes and Replace all empty string values with NULL
    var entry = emptyStringToNull({
        MCDrelatedID: req.params.MCD_id,
        date: Date,
        association: Association,
        referringManager: ReferringManager,
        referringManagerTitle: ReferringManagerTitle,
        branchOffice: BranchOffice,
        note: Note,
        whoElseConsidered: WhoElseConsidered,
        possibleHireNotes: PossibleHireNotes,
        genuineOrThirdBid: GenuineOrThirdBid,
        firmHired: FirmHired,
        hiringDecisionNotes: HiringDecisionNotes,
    });
    // Create new MgmtCoReferralsToCM record
    MgmtCoReferralsToCM.create(entry)
        .catch(err => {
            console.log(err);
            req.flash('failure','New MCD entry\'s *mcd_MgmtCoReferralsToCM* record not added.');
        });

    res.redirect("../../entry/" + req.params.MCD_id);
});
// Update MCD Entry's Mgmt Co Referrals To CM
router.post('/entry/', ensureReadOnlyMCD, async function (req, res, next) {
    const {
        Date,
        Association,
        ReferringManager,
        ReferringManagerTitle,
        BranchOffice,
        Note,
        WhoElseConsidered,
        PossibleHireNotes,
        GenuineOrThirdBid,
        FirmHired,
        HiringDecisionNotes,
    } = req.body;
    // Record attributes and Replace all empty string values with NULL
    var entry = emptyStringToNull({
        MCDrelatedID: req.params.MCD_id,
        date: Date,
        association: Association,
        referringManager: ReferringManager,
        referringManagerTitle: ReferringManagerTitle,
        branchOffice: BranchOffice,
        note: Note,
        whoElseConsidered: WhoElseConsidered,
        possibleHireNotes: PossibleHireNotes,
        genuineOrThirdBid: GenuineOrThirdBid,
        firmHired: FirmHired,
        hiringDecisionNotes: HiringDecisionNotes,
    });
    // update record
    await MgmtCoReferralsToCM.update(entry, {where: {id:req.params.MgmtCoReferralsToCM_id}})
        .catch(err => {
            console.log(err);
            req.flash('failure','Update MCD entry\'s *mcd_MgmtCoReferralsToCM* record failed.');
        });

    res.redirect("../../entry/" + req.params.MCD_id);
});













// TEMPLATE TO COPY PASTE
//
// //  Section --------------------------------------
// // Create MCD Entry's
// router.post('/create/', ensureReadOnlyMCD, function (req, res, next) {
//     const {
//
//     } = req.body;
//     //
//     var entry = {
//         MCDrelatedID: req.params.MCD_id,
//
//     };
//     // Replace all empty string values with NULL
//     for (let key of Object.keys(entry)){
//         if (entry[key] == '') {
//             entry[key] = null;
//         }
//     }
//     // Create new update record
//     .create(entry)
//         .catch(err => {
//             console.log(err);
//             req.flash('failure','New MCD entry\'s *mcd_* record not added.');
//         });
//
//     res.redirect("../../entry/" + req.params.MCD_id);
// });
// // Update MCD Entry's
// router.post('/entry/', ensureReadOnlyMCD, async function (req, res, next) {
//     const {
//
//     } = req.body;
//     //
//     var entry = {
//
//     };
//     // Replace all empty string values with NULL
//     for (let key of Object.keys(entry)){
//         if (entry[key] == '') {
//             entry[key] = null;
//         }
//     }
//     // update record
//     await .update(entry, {where: {id:req.params._id}})
//         .catch(err => {
//             console.log(err);
//             req.flash('failure','Update MCD entry\'s *mcd_* record failed.');
//         });
//
//     res.redirect("../../entry/" + req.params.MCD_id);
// });


// Function to replace empty strings with null
//      Specifically avoids booleans, since a false value was getting replaced with null
function emptyStringToNull(entry) {
    // Replace all empty string values with NULL
    for (let key of Object.keys(entry)){
        if (typeof entry[key] != "boolean" && entry[key] == '') {
            entry[key] = null;
        }
    }
    return entry;
}

module.exports = router;
