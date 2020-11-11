// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const BranchOffice = sequelize.define("BranchOffice", {
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
        referralStatusToMgmtCo: {
            type: Sequelize.STRING,
        },
        //
        branchOffice: {
            type: Sequelize.STRING,
        },
        //
        referralStatusToCM: {
            type: Sequelize.STRING,
        },
        //
        address: {
            type: Sequelize.STRING,
        },
        //
        city: {
            type: Sequelize.STRING,
        },
        //
        county: {
            type: Sequelize.STRING,
        },
        //
        phone: {
            type: Sequelize.STRING,
        },
        //
        fax: {
            type: Sequelize.STRING,
        },
        //
        tollFree: {
            type: Sequelize.STRING,
        },
        //
        numberOfManagers: {
            type: Sequelize.STRING,
        },
        //
        numberOfAssociations: {
            type: Sequelize.STRING,
        },
        //
        numberOfClients: {
            type: Sequelize.STRING,
        },
        //
        numberOfPotentialClients: {
            type: Sequelize.STRING,
        },
        //
        countiesServiced: {
            type: Sequelize.STRING,
        },
        //
        favoriteFirms: {
            type: Sequelize.STRING,
        },
        //
        date: {
            type: Sequelize.STRING,
        },
        //
        notes: {
            type: Sequelize.TEXT,
        }

    });

    return BranchOffice;
  };
