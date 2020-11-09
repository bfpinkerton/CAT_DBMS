/*
    - This model contains basic information about a MAL entry with additional foreign key links to
*/

module.exports = (sequelize, Sequelize) => {
    const MAL = sequelize.define("MAL", {
        // --Metadata--
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            // defaultValue: '0',
            primaryKey: true
        },
        creation: {
            type: Sequelize.DATEONLY,
            defaultValue: Sequelize.NOW
        },
        originator: {
            type: Sequelize.STRING,
            allowNull: false
        },



        // --Additional Updates Table--
        /*
            - Table: "updates.model.js"
            - One to Many Association — Not able to associate both ways; ID not logged below
        */



        // --Primary Association Information--
        legalName: {
            type: Sequelize.STRING,
        },
        aka: {
            type: Sequelize.STRING,
        },
        clientAcctNum: {
            type: Sequelize.STRING,
        },
        fileName: {
            type: Sequelize.STRING,
        },
        statusInFirm: {
            type: Sequelize.STRING,
        },
        specialClassification: {
            type: Sequelize.STRING,
        },
        asscType: {
            type: Sequelize.STRING,
        },
        scndMHPAssc: {
            type: Sequelize.STRING,
        },
        domicileCounty: {
            type: Sequelize.STRING,
        },
        domicileCity: {
            type: Sequelize.STRING,
        },
        domicileZip: {
            type: Sequelize.STRING,
        },



        // --Association Photo--
        // Save file name of photo and search file directory
        associationPhoto: {
            type: Sequelize.STRING,
        },



        // --Supplemental Association Information--
        /*
            - Table: "mal_SupplementalAssociationInfo.model.js"
            - One to One Association — Able to associate both ways; ID logged below
            - ID logged following creation of MAL record
        */
        supplementalAssociationInfoID: {
            type: Sequelize.INTEGER,
        },



        // --General Board Member Related Information--
        /*
            - Table: "mal_GeneralBoardInfo.model.js"
            - One to One Association — Able to associate both ways; ID logged below
            - ID logged following creation of MAL record
        */
        generalBoardTableID: {
            type: Sequelize.INTEGER,
        },



        // --Individual Board Member Related Information--
        // TODO: Populate Table Columns
        /*
            - Table: "mal_BoardMembers.model.js"
            - One to Many Association — Not able to associate both ways; ID not logged below
        */
            // --Board Member Seminar Information--
            // TODO: Populate Table Columns
            /*
                - Table: "mal_MemberSeminar.model.js"
                - One to Many Association — Not able to associate both ways; ID not logged below
                - Table relates to BoardMembers Table
            */
            // --Board Member Organization Information--
            // TODO: Add Board Member Name & info to table
            /*
                - Table: "mal_OrganizationInformation.model.js"
                - One to Many Association — Not able to associate both ways; ID logged below
            */
            // --Board Member Gifts--
            // TODO: Populate Table Columns
            /*
                - Table: "mal_Gifts.model.js"
                    - Same table used by Managers Table
                - One to Many Association — Not able to associate both ways; ID not logged below
                - Table relates to BoardMembers Table
            */
            // --Board Member Birthdays--
            // TODO: Populate Table Columns
            /*
                - Table: "mal_Birthdays.model.js"
                    - Same table used by Managers Table
                - One to One Association — Able to associate both ways; ID not logged below
                    - Instead logged within individual Board Member record in "mal_BoardMembers.model.js"
                - Table relates to BoardMembers Table
            */
           // --Board Member Contests--
            // TODO: Populate Table Columns
            /*
                - Table: "mal_Contests.model.js"
                    - Same table used by Managers Table
                - One to One Association — Able to associate both ways; ID not logged below
                    - Instead logged within individual Board Member record in "mal_BoardMembers.model.js"
                - Table relates to BoardMembers Table
            */



        // -- Representation Inquiries--
        /*
            - Table: "mal_RepresentationInquiries.model.js"
            - One to Many Association — Not able to associate both ways; ID not logged below
        */



        // --Merchandise Purchases--
            // --Mug Purchases--
            /*
                - Table: "mal_MerchandiseMug.model.js"
                - One to Many Association — Not able to associate both ways; ID not logged below
            */
            // --Florida Statue--
            /*
                - Table: "mal_MerchandiseFloridaStatue.model.js"
                - One to Many Association — Not able to associate both ways; ID not logged below
            */



        // --Social Media--
        /*
            - Table: "mal_SocialMedia.model.js"
            - One to One Association — Able to associate both ways; ID logged below
            - ID logged following creation of MAL record
        */
        socialMediaID: {
            type: Sequelize.INTEGER,
        },



        // --Birthdays, Contests--
        /*
            - Respective Tables referenced in Board Members & Managers Listings
            - See above and below for listing
        */



        // --Gifts--
        /*
            - Respective Tables referenced in Board Members & Managers Listings
            - See above and below for listing
        */



        // --Management Information--
        // TODO — Pulls from MML; Create Table
        /*
            - Table: "xxx.model.js"
            - Not sure yet
        */
            // --Manager Gifts--
            // TODO - Populate Table Columns
            /*
                - Table: "mal_Gifts.model.js"
                    - Same table used by Board Members Table
                - One to Many Association — Not able to associate both ways; ID not logged below
                - Table relates to Managers Table
            */
            // --Manager Birthdays--
            // TODO: Populate Table Columns
            /*
                - Table: "mal_Birthdays.model.js"
                    - Same table used by Managers Table
                - One to One Association — Able to associate both ways; ID not logged below
                    - Instead logged within individual Board Member record in "mal_BoardMembers.model.js"
                - Table relates to Managers Table
            */
            // --Manager Contests--
            // TODO: Populate Table Columns
            /*
                - Table: "mal_Contests.model.js"
                    - Same table used by Managers Table
                - One to One Association — Able to associate both ways; ID not logged below
                    - Instead logged within individual Board Member record in "mal_BoardMembers.model.js"
                - Table relates to Managers Table
            */



        // --Hiring Information--
        /*
            - Table: "mal_HiringRecord.model.js"
            - One to Many Association — Not able to associate both ways; ID not logged below
        */



        // --Termination Information--
        /*
            - Table: "mal_TerminationRecord.model.js"
            - One to Many Association — Not able to associate both ways; ID not logged below
        */



        // --Referrals--
            // --Source of Referral to C&M--
            /*
                - Table: "mal_ReferralSource.model.js"
                - One to Many Association — Not able to associate both ways; ID not logged below
            */
            // --Referrals from C&M for Mgmt. Co./Vendors--
            /*
                - Table: "mal_ReferralMgmtCoVendor.model.js"
                - One to Many Association — Not able to associate both ways; ID not logged below
            */



        // --Presentation Information--
        /*
            - Table: "mal_Presentations.model.js"
            - One to Many Association — Not able to associate both ways; ID not logged below
        */



        // --Potential Client Status Report--
        /*
            - Table: "mal_PotentialClientReports.model.js"
            - One to Many Association — Not able to associate both ways; ID not logged below
        */







        // --Corporate--
        /*
            - Table: "mcd_Corporate.model.js"
            - ID logged following creation of MAL record
        */
        corporateID: {
            type: Sequelize.INTEGER,
        },



        // --Corporate Status--
        /*
            - Table: "mcd_CorporateStatus.model.js"
            - ID logged following creation of MAL record
        */
        corporateStatusID: {
            type: Sequelize.INTEGER,
        },



        // --Corporate Contact--
        /*
            - Table: "mcd_CorporateContact.model.js"
            - ID logged following creation of MAL record
        */
        corporateContactID: {
            type: Sequelize.INTEGER,
        },



        // --Branch Office--
        /*
            - Table: "mcd_BranchOffice.model.js"
            - ID logged following creation of MAL record
        */
        branchOfficeID: {
            type: Sequelize.INTEGER,
        },



        // --CM Referrals to Mgmt. Co.--
        /*
            - Table: "mcd_CMReferralsToMgmtCo.model.js"
            - ID logged following creation of MAL record
        */
        cmReferralsToMgmtCoID: {
            type: Sequelize.INTEGER,
        },



        // --Mgmt. Co. Referrals to CM--
        /*
            - Table: "mcd_MgmtCoReferralsToCM.model.js"
            - ID logged following creation of MAL record
        */
        mgmtCoReferralsToCMID: {
            type: Sequelize.INTEGER,
        }

    });

    return MAL;
  };
