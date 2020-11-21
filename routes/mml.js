/*
    ROUTING MODEL for MML
*/

const express = require('express');
const router = express.Router();
// const passport = require('passport');
const moment = require('moment');
const db = require("../models");

const multer = require('multer');
const upload = multer();
const open = require('open');

// User model
const User = db.users;
const Update = db.updates;
const MML = db.mml;
const ManagementCompany = db.managementCompany;
const GeneralInformation = db.generalInformation;
const BusinessInformation = db.businessInformation;
const OnSiteInformation = db.onSiteInformation;
const StaffInformation = db.staffInformation;
const HomeInformation = db.homeInformation;
const SocialMediaExtras = db.socialMediaExtras;
const Referrals = db.referrals;

// Ensure authenticated user is logged in
const {
    ensureAuthenticated
} = require('../config/auth');

// Ensure user does not have readOnly
const {
    ensureReadOnlyMML
} = require('../config/readOnlyMML');

// ------------------------------------------------------------------

// GET home page
router.get('/dashboard', ensureAuthenticated, async function (req, res, next) {
    req.flash('success', "Please choose a utility from the sidebar");
    res.locals.message = req.flash();
    req.app.locals.user = req.user;
    req.app.locals.listingMML = await MML.findAll(
        { plain: true }
    );
    res.render('pages/mml/dashboard', );
});

// GET create page
router.get('/create', ensureReadOnlyMML, async function (req, res, next) {
    req.app.locals.user = req.user;
    req.app.locals.date = moment().format('MMMM Do YYYY');
    res.render('pages/mml/create', );
});



// Create handle
// TODO: [Transactions] Force atomicity on this entire route.
router.post('/create', ensureReadOnlyMML, function (req, res, next) {
    var mmlID;
    // Create mml object
    var newEntry = {
        // --Metadata--
        // creation: AUTOGENERATED,
        originator: req.user.fName + " " + req.user.lName,
    };
    // Replace all empty string values with NULL
    for (let key of Object.keys(newEntry)){
        if (newEntry[key] == '') {
            newEntry[key] = null;
        }
    }
    // Create MML entry with object data
    MML.create(newEntry)
                .then(data => {
                    // record entry ID
                    mmlID = data.id;

                    // updates.model.js -------------------------------------------------------------------------------------------------
                    // TODO: Uncomment and modify to support MMLs
                    /* const {
                        UpdateNote
                    } = req.body;
                    // update tracking JSON
                    updateTrackingJSON = {
                        "type":"CREATE",
                        "log": [
                            { "field":"", "before":"", "after":"" },
                        ]
                    }
                    // Record attributes
                    var entryUpdate = {
                        MALrelatedID: malID,
                        relatedTable: 'MAL',
                        updateAuthor: data.originator,
                        updateTracking: JSON.stringify(updateTrackingJSON),
                        updateNote: UpdateNote
                    };
                    // Replace all empty string values with NULL
                    for (let key of Object.keys(entryUpdate)){
                        if (entryUpdate[key] == '') {
                            entryUpdate[key] = null;
                        }
                    }
                    // Create new update record
                    Update.create(entryUpdate)
                        .catch(err => {
                            console.log(err);
                            req.flash('failure','New MAL entry\'s *UPDATE* record not added.');
                        }); */

                    

                    // mml_ManagementCompany.model.js -----------------------------------------------------------------------------
                    // Create new ManagementCompany record and Replace all empty string values with NULL
                    createFormTable(ManagementCompany, 'ManagementCompany', 'managementCompanyID', MML, mmlID, 'MML', res, req, emptyStringToNull({
                        MMLrelatedID: mmlID,
                        mgmtCoID: req.body.ManagementMgmtCoID,
                        mgmtCoAssnSeminarNameTag: req.body.ManagementMgmtCoAssnSeminarNameTag,
                        companyType: req.body.ManagementCompanyType
                    }))

                    

                    // mml_GeneralInformation.model.js -----------------------------------------------------------------------------
                    // Create new GeneralInformation record and Replace all empty string values with NULL
                    createFormTable(GeneralInformation, 'GeneralInformation', 'generalInformationID', MML, mmlID, 'MML', res, req, emptyStringToNull({
                        MMLrelatedID: mmlID,
                        mktgStatus: req.body.GeneralMktgStatus,
                        statusCategory: req.body.GeneralStatusCategory,
                        license: req.body.GeneralLicense,
                        licenseNo: req.body.GeneralLicenseNo,
                        licenseDate: req.body.GeneralLicenseDate,
                        title: req.body.GeneralTitle,
                        gender: req.body.GeneralGender,
                        firstName: req.body.GeneralFirstName,
                        lastName: req.body.GeneralLastName,
                        otherNames: req.body.GeneralOtherNames,
                        preferredTitle: req.body.GeneralPreferredTitle,
                        dispositionTowardCM: req.body.GeneralDispositionTowardCM
                    }))                    



                    // TODO: Fix Bug: BusinessInformation entries not being created!!
                    // mml_BusinessInformation.model.js -----------------------------------------------------------------------------
                    // Create new BusinessInformation record and Replace all empty string values with NULL
                    createFormTable(BusinessInformation, 'BusinessInformation', 'businessInformationID', MML, mmlID, 'MML', res, req, emptyStringToNull({
                        MMLrelatedID: mmlID,
                        workBranchAddress: req.body.BusinessWorkBranchAddress,
                        city: req.body.BusinessCity,
                        state: req.body.BusinessState,
                        zip: req.body.BusinessZip,
                        county: req.body.BusinessCounty,
                        landlinePhone: req.body.BusinessLandlinePhone,
                        extension: req.body.BusinessExtension,
                        cellPhone: req.body.BusinessCellPhone,
                        fax: req.body.BusinessFax,
                        tollFree: req.body.BusinessTollFree,
                        workEmail: req.body.BusinessWorkEmail,
                        workNotes: req.body.BusinessWorkNotes
                    }))



                    // mml_OnSiteInformation.model.js -----------------------------------------------------------------------------
                    // Create new OnSiteInformation record and Replace all empty string values with NULL
                    createFormTable(OnSiteInformation, 'OnSiteInformation', 'onSiteInformationID', MML, mmlID, 'MML', res, req, emptyStringToNull({
                        MMLrelatedID: mmlID,
                        address: req.body.OnSiteAddress,
                        city: req.body.OnSiteCity,
                        state: req.body.OnSiteState,
                        zip: req.body.OnSiteZip,
                        county: req.body.OnSiteCounty,
                        landlinePhone: req.body.OnSiteLandlinePhone,
                        extension: req.body.OnSiteExtension,
                        cellPhone: req.body.OnSiteCellPhone,
                        fax: req.body.OnSiteFax,
                        tollFree: req.body.OnSiteTollFree,
                        workEmail: req.body.OnSiteWorkEmail,
                        workNotes: req.body.OnSiteWorkNotes
                    }))



                    // mml_StaffInformation.model.js -----------------------------------------------------------------------------
                    // Create new StaffInformation record and Replace all empty string values with NULL
                    createFormTable(StaffInformation, 'StaffInformation', 'staffInformationID', MML, mmlID, 'MML', res, req, emptyStringToNull({
                        MMLrelatedID: mmlID,
                        assistantName: req.body.StaffAssistantName,
                        phone: req.body.StaffPhone,
                        extension: req.body.StaffExtension,
                        onSiteAddress: req.body.StaffOnSiteAddress,
                        city: req.body.StaffCity,
                        state: req.body.StaffState,
                        zip: req.body.StaffZip,
                        county: req.body.StaffCounty,
                        landlinePhone: req.body.StaffLandlinePhone,
                        landlineExtension: req.body.StaffLandlineExtension,
                        cellPhone: req.body.StaffCellPhone,
                        fax: req.body.StaffFax,
                        tollFree: req.body.StaffTollFree,
                        onSiteEmail: req.body.StaffOnSiteEmail
                    }))



                    // mml_HomeInformation.model.js -----------------------------------------------------------------------------
                    // Create new HomeInformation record and Replace all empty string values with NULL
                    createFormTable(HomeInformation, 'HomeInformation', 'homeInformationID', MML, mmlID, 'MML', res, req, emptyStringToNull({
                        MMLrelatedID: mmlID,
                        mktgStatus: req.body.HomeMktgStatus,
                        statusCategory: req.body.HomeStatusCategory,
                        address: req.body.HomeAddress,
                        city: req.body.HomeCity,
                        state: req.body.HomeState,
                        zip: req.body.HomeZip,
                        county: req.body.HomeCounty,
                        emailAddress: req.body.HomeEmailAddress,
                        homePhone: req.body.HomeHomePhone,
                        homeNotes: req.body.HomeHomeNotes
                    }))



                    // mml_SocialMediaExtras.model.js -----------------------------------------------------------------------------
                    // Create new SocialMediaExtras record and Replace all empty string values with NULL
                    createFormTable(SocialMediaExtras, 'SocialMediaExtras', 'socialMediaExtrasID', MML, mmlID, 'MML', res, req, emptyStringToNull({
                        MMLrelatedID: mmlID,
                        christmasCard: req.body.SocialChristmasCard,
                        birthdayEmail: req.body.SocialBirthdayEmail,
                        facebookAuthorizationDate: req.body.SocialFacebookAuthorizationDate,
                        newsletterAuthorization: req.body.SocialNewsletterAuthorization,
                        willSendPhoto: req.body.SocialWillSendPhoto,
                        photoFurnished: req.body.SocialPhotoFurnished,
                        declinedAllBirthday: req.body.SocialDeclinedAllBirthday,
                        followCMOnFB: req.body.SocialFollowCMOnFB,
                        followUpFB: req.body.SocialFollowUpFB,
                        followedDateFB: req.body.SocialFollowedDateFB,
                        followCMOnLI: req.body.SocialFollowCMOnLI,
                        followUpLI: req.body.SocialFollowUpLI,
                        followedDateLI: req.body.SocialFollowedDateLI,
                        offeredFollowAFS: req.body.SocialOfferedFollowAFS,
                        followUpAFS: req.body.SocialFollowUpAFS,
                        followedDateAFS: req.body.SocialFollowedDateAFS,
                        facebook: req.body.SocialFacebook,
                        linkedIn: req.body.SocialLinkedIn,
                        instagram: req.body.SocialInstagram,
                        twitter: req.body.SocialTwitter,
                        none: req.body.SocialNone
                    }))



                    // --Seminars 2020 ????--
                    // TODO



                    // --Gifts--
                    // TODO



                    // --Law Firm Preferences--
                    // TODO



                    // --Associations Managed--
                    // TODO



                    // -- Referrals--
                    /*
                        - Table: "mml_Referrals.model.js"
                        - One to Many Association — Not able to associate both ways; ID not logged below
                    */
                   // mml_Referrals.model.js -------------------------------------------------------------------------------
                   // Create new Referrals record and Replace all empty string values with NULL
                    createFormTableMany(Referrals, 'Referrals', 'MML', req, emptyStringToNull({
                        MMLrelatedID: mmlID,
                        referralDate: req.body.ReferralsReferralDate,
                        staff: req.body.ReferralsStaff,
                        dateEntered: req.body.ReferralsDateEntered,
                        mgmtCoName: req.body.ReferralsMgmtCoName,
                        office: req.body.ReferralsOffice,
                        legalNameReferredAssociation: req.body.ReferralsLegalNameReferredAssociation,
                        county: req.body.ReferralsCounty,
                        referralTitle: req.body.ReferralsReferralTitle,
                        referralSource: req.body.ReferralsReferralSource,
                        status: req.body.ReferralsStatus,
                        gift: req.body.ReferralsGift,
                        referralPriority: req.body.ReferralsReferralPriority,
                        referralType: req.body.ReferralsReferralType,
                        associationWentTo: req.body.ReferralsAssociationWentTo,
                        staffInitials: req.body.ReferralsStaffInitials,
                        dateClosed: req.body.ReferralsDateClosed,
                        notes: req.body.ReferralsNotes
                    }))



                    // Final success code -------------------------------------------------------------------------------------------------
                    req.flash('success','New MML entry successfully added.');
                    res.locals.message = req.flash();
                    // mmlID is a variable that stores the ID of a record's ID
                    // What would be the correct syntax to pass the ID along?
                    res.redirect("../mml/entry/" + mmlID);
                })
                .catch(err => {
                    console.log(err);
                    req.flash('failure','New MML entry not added.');
                    res.locals.message = req.flash();
                    res.redirect("../mml/create");
                });

});



// Query specified table and return record * For One-to-Many associations
router.get('/retrieve/:table/:id', ensureAuthenticated, async function (req, res) {
    let record;
    switch (req.params.table) {
        /*case "Update" :
            record = await Update.findOne(
                {where: {id:req.params.id}},
                { plain: true }
            );
            break;*/
        // Seminars 2020 if One-to-Many??
        // TODO
        // Gifts if One-to-Many??
        // TODO
        // Law Firm Preferences if One-to-Many??
        // TODO
        case "Referrals" :
            record = await Referrals.findOne(
                {where: {id:req.params.id}},
                { plain: true }
            );
            break;
    }
    res.json(record);
});



// GET entry page * including all One-to-Ones and One-to-Manys * One-to-Manys also include "order" field
router.get('/entry/:id', ensureAuthenticated, async function (req, res, next) {
    req.app.locals.user = req.user;
    req.app.locals.date = moment().format('MMMM Do YYYY');
    const mmlID = req.params.id;
    // DB call to retrieve record
    req.app.locals.mml = await MML.findOne(
        {where: {id:mmlID}},
        { plain: true }
    );
    /*req.app.locals.update = await Update.findOne(
        {where: {MALrelatedID:malID}},
        {order: ['id','ASC']},
        { plain: true }
    );*/
    req.app.locals.ManagementCompany = await ManagementCompany.findOne(
        {where: {MMLrelatedID: mmlID}},
        { plain: true }
    );
    req.app.locals.GeneralInformation = await GeneralInformation.findOne(
        {where: {MMLrelatedID: mmlID}},
        { plain: true }
    );
    req.app.locals.BusinessInformation = await BusinessInformation.findOne(
        {where: {MMLrelatedID: mmlID}},
        { plain: true }
    );
    req.app.locals.OnSiteInformation = await OnSiteInformation.findOne(
        {where: {MMLrelatedID: mmlID}},
        { plain: true }
    );
    req.app.locals.StaffInformation = await StaffInformation.findOne(
        {where: {MMLrelatedID: mmlID}},
        { plain: true }
    );
    req.app.locals.HomeInformation = await HomeInformation.findOne(
        {where: {MMLrelatedID: mmlID}},
        { plain: true }
    );
    req.app.locals.SocialMediaExtras = await SocialMediaExtras.findOne(
        {where: {MMLrelatedID: mmlID}},
        { plain: true }
    );
    // Seminars 2020
    // TODO
    // Gifts
    // TODO
    // Law Firm Preferences
    // TODO
    req.app.locals.AssociationsManaged = await AssociationsManaged.findOne(
        {where: {MMLrelatedID: mmlID}},
        { plain: true }
    );
    req.app.locals.Referrals = await Referrals.findAll(
        {where: {MMLrelatedID: mmlID}},
        {order: ['id','ASC']},
        { plain: true }
    );
    res.render('pages/mml/entry', );
});
// ----------------------------------------------------------------------------------------

/*
    INDIVIDUAL TABLE POSTS (CREATES, UPDATES, & DELETE)
    - The below routes all pertain to creating, updating, or deleting a specified table's record
*/

// PARAMETERIZED DELETE
router.delete('/delete/:table/:id', (req, res) => {
    // TODO: DB Query

    req.flash('success', 'Record has been deleted.')
    res.locals.message = req.flash();
    res.redirect('../delete');
});



// One-to-One: Update
// One-to-Many: Create & Update

// Management Company Section ----------------------------------------------------------------------------------------------------
// Update MML Entry's Management Company
router.post('/entry/management/:form_id/:table_id', ensureReadOnlyMML, async function (req, res, next) {
    // Update record and Replace all empty string values with NULL
    updateTable(ManagementCompany, 'ManagementCompany', 'MML', res, req, emptyStringToNull({
        mgmtCoID: req.body.ManagementMgmtCoID,
        mgmtCoAssnSeminarNameTag: req.body.ManagementMgmtCoAssnSeminarNameTag,
        companyType: req.body.ManagementCompanyType
    }))
});



// General Information Section ----------------------------------------------------------------------------------------------------
// Update MML Entry's General Information
router.post('/entry/general/:form_id/:table_id', ensureReadOnlyMML, async function (req, res, next) {
    // Update record and Replace all empty string values with NULL
    updateTable(GeneralInformation, 'GeneralInformation', 'MML', res, req, emptyStringToNull({
        mktgStatus: req.body.GeneralMktgStatus,
        statusCategory: req.body.GeneralStatusCategory,
        license: req.body.GeneralLicense,
        licenseNo: req.body.GeneralLicenseNo,
        licenseDate: req.body.GeneralLicenseDate,
        title: req.body.GeneralTitle,
        gender: req.body.GeneralGender,
        firstName: req.body.GeneralFirstName,
        lastName: req.body.GeneralLastName,
        otherNames: req.body.GeneralOtherNames,
        preferredTitle: req.body.GeneralPreferredTitle,
        dispositionTowardCM: req.body.GeneralDispositionTowardCM
    }))
});



// Business Information Section ----------------------------------------------------------------------------------------------------
// Update MML Entry's Business Information
router.post('/entry/business/:form_id/:table_id', ensureReadOnlyMML, async function (req, res, next) {
    // Update record and Replace all empty string values with NULL
    updateTable(BusinessInformation, 'BusinessInformation', 'MML', res, req, emptyStringToNull({
        workBranchAddress: req.body.BusinessWorkBranchAddress,
        city: req.body.BusinessCity,
        state: req.body.BusinessState,
        zip: req.body.BusinessZip,
        county: req.body.BusinessCounty,
        landlinePhone: req.body.BusinessLandlinePhone,
        extension: req.body.BusinessExtension,
        cellPhone: req.body.BusinessCellPhone,
        fax: req.body.BusinessFax,
        tollFree: req.body.BusinessTollFree,
        workEmail: req.body.BusinessWorkEmail,
        workNotes: req.body.BusinessWorkNotes
    }))
});



// OnSite Information Section ----------------------------------------------------------------------------------------------------
// Update MML Entry's Onsite Information
router.post('/entry/onsite/:form_id/:table_id', ensureReadOnlyMML, async function (req, res, next) {
    // Update record and Replace all empty string values with NULL
    updateTable(OnSiteInformation, 'OnSiteInformation', 'MML', res, req, emptyStringToNull({
        address: req.body.OnSiteAddress,
        city: req.body.OnSiteCity,
        state: req.body.OnSiteState,
        zip: req.body.OnSiteZip,
        county: req.body.OnSiteCounty,
        landlinePhone: req.body.OnSiteLandlinePhone,
        extension: req.body.OnSiteExtension,
        cellPhone: req.body.OnSiteCellPhone,
        fax: req.body.OnSiteFax,
        tollFree: req.body.OnSiteTollFree,
        workEmail: req.body.OnSiteWorkEmail,
        workNotes: req.body.OnSiteWorkNotes
    }))
});



// Staff Information Section ----------------------------------------------------------------------------------------------------
// Update MML Entry's Staff Information
router.post('/entry/staff/:form_id/:table_id', ensureReadOnlyMML, async function (req, res, next) {
    // Update record and Replace all empty string values with NULL
    updateTable(StaffInformation, 'StaffInformation', 'MML', res, req, emptyStringToNull({
        assistantName: req.body.StaffAssistantName,
        phone: req.body.StaffPhone,
        extension: req.body.StaffExtension,
        onSiteAddress: req.body.StaffOnSiteAddress,
        city: req.body.StaffCity,
        state: req.body.StaffState,
        zip: req.body.StaffZip,
        county: req.body.StaffCounty,
        landlinePhone: req.body.StaffLandlinePhone,
        landlineExtension: req.body.StaffLandlineExtension,
        cellPhone: req.body.StaffCellPhone,
        fax: req.body.StaffFax,
        tollFree: req.body.StaffTollFree,
        onSiteEmail: req.body.StaffOnSiteEmail
    }))
});



// Home Information Section ----------------------------------------------------------------------------------------------------
// Update MML Entry's Home Information
router.post('/entry/home/:form_id/:table_id', ensureReadOnlyMML, async function (req, res, next) {
    // Update record and Replace all empty string values with NULL
    updateTable(HomeInformation, 'HomeInformation', 'MML', res, req, emptyStringToNull({
        mktgStatus: req.body.HomeMktgStatus,
        statusCategory: req.body.HomeStatusCategory,
        address: req.body.HomeAddress,
        city: req.body.HomeCity,
        state: req.body.HomeState,
        zip: req.body.HomeZip,
        county: req.body.HomeCounty,
        emailAddress: req.body.HomeEmailAddress,
        homePhone: req.body.HomeHomePhone,
        homeNotes: req.body.HomeHomeNotes
    }))
});



// SocialMediaExtras Section ----------------------------------------------------------------------------------------------------
// Update MML Entry's SocialMediaExtras
router.post('/entry/social/:form_id/:table_id', ensureReadOnlyMML, async function (req, res, next) {
    // Update record and Replace all empty string values with NULL
    updateTable(SocialMediaExtras, 'SocialMediaExtras', 'MML', res, req, emptyStringToNull({
        christmasCard: req.body.SocialChristmasCard,
        birthdayEmail: req.body.SocialBirthdayEmail,
        facebookAuthorizationDate: req.body.SocialFacebookAuthorizationDate,
        newsletterAuthorization: req.body.SocialNewsletterAuthorization,
        willSendPhoto: req.body.SocialWillSendPhoto,
        photoFurnished: req.body.SocialPhotoFurnished,
        declinedAllBirthday: req.body.SocialDeclinedAllBirthday,
        followCMOnFB: req.body.SocialFollowCMOnFB,
        followUpFB: req.body.SocialFollowUpFB,
        followedDateFB: req.body.SocialFollowedDateFB,
        followCMOnLI: req.body.SocialFollowCMOnLI,
        followUpLI: req.body.SocialFollowUpLI,
        followedDateLI: req.body.SocialFollowedDateLI,
        offeredFollowAFS: req.body.SocialOfferedFollowAFS,
        followUpAFS: req.body.SocialFollowUpAFS,
        followedDateAFS: req.body.SocialFollowedDateAFS,
        facebook: req.body.SocialFacebook,
        linkedIn: req.body.SocialLinkedIn,
        instagram: req.body.SocialInstagram,
        twitter: req.body.SocialTwitter,
        none: req.body.SocialNone
    }))
});



// Seminars 2020 Section ----------------------------------------------------------------------------------------------------
// TODO

// Gifts Section Section ----------------------------------------------------------------------------------------------------
// TODO

// Law Firm Preferences Section ----------------------------------------------------------------------------------------------------
// TODO

// Associations Managed Section ----------------------------------------------------------------------------------------------------
// TODO



// Referrals Section ----------------------------------------------------------------------------------------------------
// Create MML Entry's Referrals
router.post('/create/referrals/:form_id', ensureReadOnlyMML, function (req, res, next) {
    // Create record and Replace all empty string values with NULL
    createTable(Referrals, 'Referrals', 'MML', res, req, emptyStringToNull({
        MMLrelatedID: req.params.form_id,
        referralDate: req.body.ReferralsReferralDate,
        staff: req.body.ReferralsStaff,
        dateEntered: req.body.ReferralsDateEntered,
        mgmtCoName: req.body.ReferralsMgmtCoName,
        office: req.body.ReferralsOffice,
        legalNameReferredAssociation: req.body.ReferralsLegalNameReferredAssociation,
        county: req.body.ReferralsCounty,
        referralTitle: req.body.ReferralsReferralTitle,
        referralSource: req.body.ReferralsReferralSource,
        status: req.body.ReferralsStatus,
        gift: req.body.ReferralsGift,
        referralPriority: req.body.ReferralsReferralPriority,
        referralType: req.body.ReferralsReferralType,
        associationWentTo: req.body.ReferralsAssociationWentTo,
        staffInitials: req.body.ReferralsStaffInitials,
        dateClosed: req.body.ReferralsDateClosed,
        notes: req.body.ReferralsNotes
    }))
});
// Update MML Entry's Referrals
router.post('/entry/referrals/:form_id/:table_id', ensureReadOnlyMML, async function (req, res, next) {
    // Update record and Replace all empty string values with NULL
    updateTable(Referrals, 'Referrals', 'MML', res, req, emptyStringToNull({
        referralDate: req.body.ReferralsReferralDate,
        staff: req.body.ReferralsStaff,
        dateEntered: req.body.ReferralsDateEntered,
        mgmtCoName: req.body.ReferralsMgmtCoName,
        office: req.body.ReferralsOffice,
        legalNameReferredAssociation: req.body.ReferralsLegalNameReferredAssociation,
        county: req.body.ReferralsCounty,
        referralTitle: req.body.ReferralsReferralTitle,
        referralSource: req.body.ReferralsReferralSource,
        status: req.body.ReferralsStatus,
        gift: req.body.ReferralsGift,
        referralPriority: req.body.ReferralsReferralPriority,
        referralType: req.body.ReferralsReferralType,
        associationWentTo: req.body.ReferralsAssociationWentTo,
        staffInitials: req.body.ReferralsStaffInitials,
        dateClosed: req.body.ReferralsDateClosed,
        notes: req.body.ReferralsNotes
    }))
});



// --------------------------------------------------------------------------------------------------------------------------------------------------------

// Function to create a form's table's entry
function createFormTable(table, tableName, formField, form, formID, formName, res, req, entry) {
    table.create(entry)
    .then(data => {
        // Update MML entry with corresponding ManagementCompany table ID
        form.update(
            JSON.parse('{ "' + formField + '":' + data.id + '}'),
            {where: {id: formID}}
        )
        .catch(err => {
            console.log(err);
            req.flash('failure','Failed to update ' + formName + ' entry\'s "' + formField + '"');
        });
    })
    .catch(err => {
        console.log(err);
        req.flash('failure', 'New ' + formName + ' entry\'s *' + tableName + '* record not added.');
    });
}

// Function to create a form's one-to-many table's entry
//      (Same as below function, but remove the redirect)
function createFormTableMany(table, name, form, req, entry) {
    table.create(entry)
    .catch(err => {
        console.log(err);
        req.flash('failure', 'New ' + form + ' entry\'s *' + name + '* record not added.');
    });
}

// Function to create a table's entry
function createTable(table, name, form, res, req, entry) {
    table.create(entry)
    .catch(err => {
        console.log(err);
        req.flash('failure', form + ' entry\'s *' + name + '* record not added.');
    });
    res.redirect("../../entry/" + req.params.form_id);
}


// Function to update a table's entry
async function updateTable(table, name, form, res, req, entry) {
    await table.update(entry, {where: {id: req.params.table_id}})
    .catch(err => {
        console.log(err);
        req.flash('failure', 'Failed to update ' + form + ' entry\'s ' + mml.toLowerCase() + '.' + name + '.model.js');
    });
    res.redirect("../../entry/" + req.params.form_id);
}


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