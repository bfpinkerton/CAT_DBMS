/*
    - This model contains basic information about a MCD entry with additional foreign key links to
*/

module.exports = (sequelize, Sequelize) => {
    const MCD = sequelize.define("MCD", {
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

    return MCD;
  };
