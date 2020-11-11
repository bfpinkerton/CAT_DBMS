// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const CMReferralsToMgmtCo = sequelize.define("CMReferralsToMgmtCo", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            // defaultValue: '0',
            primaryKey: true
        },
        // What MCD entry is this relating to
        MCDrelatedID: {
            type: Sequelize.INTEGER,
            references: {
                // This is a reference to another model
                model: 'MCDs',
                // This is the column name of the referenced model
                key: 'id'
            }
        },
        //
        date: {
            type: Sequelize.STRING,
        },
        //
        associationReferred: {
            type: Sequelize.STRING,
        },
        //
        associationContactPerson: {
            type: Sequelize.STRING,
        },
        //
        associationContactTitle: {
            type: Sequelize.STRING,
        },
        //
        anticipatedDateOfAssociationDecision: {
            type: Sequelize.STRING,
        },
        //
        mgmtCoEmployeeReceivingReferral: {
            type: Sequelize.STRING,
        },
        //
        mgmtCoEmployeeReceivingReferralTitle: {
            type: Sequelize.STRING,
        },
        //
        branchOffice: {
            type: Sequelize.STRING,
        },
        //
        accepted: {
            type: Sequelize.STRING,
        },
        //
        mgmtCoConversationNotes: {
            type: Sequelize.TEXT,
        },
        //
        hireCompany: {
            type: Sequelize.STRING,
        },
        //
        hireCompanyDate: {
            type: Sequelize.STRING,
        },
        //
        hireCompanyReason: {
            type: Sequelize.TEXT,
        },
        //
        associationHired: {
            type: Sequelize.STRING,
        }

    });

    return CMReferralsToMgmtCo;
  };
