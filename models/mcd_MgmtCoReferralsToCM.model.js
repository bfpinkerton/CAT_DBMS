// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const MgmtCoReferralsToCM = sequelize.define("MgmtCoReferralsToCM", {
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
        association: {
            type: Sequelize.STRING,
        },
        //
        referringManager: {
            type: Sequelize.STRING,
        },
        //
        referringManagerTitle: {
            type: Sequelize.STRING,
        },
        branchOffice: {
            type: Sequelize.STRING,
        },
        //
        note: {
            type: Sequelize.TEXT,
        },
        //
        whoElseConsidered: {
            type: Sequelize.STRING,
        },
        //
        possibleHireNotes: {
            type: Sequelize.TEXT,
        },
        //
        genuineOrThirdBid: {
            type: Sequelize.STRING,
        },
        //
        firmHired: {
            type: Sequelize.STRING,
        },
        //
        hiringDecisionNotes: {
            type: Sequelize.TEXT,
        }

    });

    return MgmtCoReferralsToCM;
  };
