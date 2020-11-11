/* 
    - This model contains basic information about a MML entry with additional foreign key links to 
*/

module.exports = (sequelize, Sequelize) => {
    const MML = sequelize.define("MML", {
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



        // --Mgmt. Company--
        /*
            - Table: "mml_ManagementCompany.model.js"
            - One to One Association — Able to associate both ways; ID logged below
            - ID logged following creation of MML record
        */
       managementCompanyID: {
           type: Sequelize.INTEGER,
       },



        // --General Information--
        /*
            - Table: "mml_GeneralInformation.model.js"
            - One to One Association — Able to associate both ways; ID logged below
            - ID logged following creation of MML record 
        */
        generalInformationID: {
            type: Sequelize.INTEGER,
        },



        // --Business Information--
        /*
            - Table: "mml_BusinessInformation.model.js"
            - One to One Association — Able to associate both ways; ID logged below
            - ID logged following creation of MML record 
        */
       businessInformationID: {
            type: Sequelize.INTEGER,
        },



        // --OnSite Information--
        /*
            - Table: "mml_OnSiteInformation.model.js"
            - One to One Association — Able to associate both ways; ID logged below
            - ID logged following creation of MML record 
        */
       onSiteInformationID: {
            type: Sequelize.INTEGER,
        },



        // --Staff Information--
        /*
            - Table: "mml_StaffInformation.model.js"
            - One to One Association — Able to associate both ways; ID logged below
            - ID logged following creation of MML record 
        */
       staffInformationID: {
            type: Sequelize.INTEGER,
        },



        // --Home Information--
        /*
            - Table: "mml_HomeInformation.model.js"
            - One to One Association — Able to associate both ways; ID logged below
            - ID logged following creation of MML record 
        */
       homeInformationID: {
            type: Sequelize.INTEGER,
        },



        // --SocialMediaExtras--
        /*
            - Table: "mml_SocialMediaExtras.model.js"
            - One to One Association — Able to associate both ways; ID logged below
            - ID logged following creation of MML record 
        */
       socialMediaExtrasID: {
            type: Sequelize.INTEGER,
        },



        // --Seminars 2020 ????--
        // TODO: I'm not sure what to do here



        // --Gifts--
        // TODO: when it says to use the same as Board Members, do you want to simple add entries to mal_Gifts
        //       or create an identical model called mml_Gifts?



        // --Law Firm Preferences--
        // TODO: apparently we need to support one-to-many here, but only with part of the information in this section.
        //       The top information is one-to-one. How do you want to go about doing this?
        //          1. have the one-to-one fields inside this file, mml.model.js, and create a mml_LawFirmPreferences.model.js, or
        //          2. have a mml_LawFirmPreferences.model.js and a mml_OtherFirmPreferences.model.js?



        // --Associations Managed--
        /*
            - Table: "mal.model.js"
            - One to One Association — Able to associate both ways; ID logged below
            - ID logged following creation of MML record
        */
       // TODO: Is it right to assume "Associations Managed" field should refer to MAL foreign key?
       associationsManaged: {
            type: Sequelize.INTEGER,
        },



        // -- Referrals--
        /*
            - Table: "mml_Referrals.model.js"
            - One to Many Association — Not able to associate both ways; ID not logged below
        */

    });
  
    return MML;
  };