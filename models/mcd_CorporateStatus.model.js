// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const CorporateStatus = sequelize.define("CorporateStatus", {
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
        legalName: {
            type: Sequelize.STRING,
        },
        //
        doingBusinessAs: {
            type: Sequelize.STRING,
        },
        //
        originalLicenseDate: {
            type: Sequelize.STRING,
        },
        //
        effectiveDate: {
            type: Sequelize.STRING,
        },
        //
        expirationDate: {
            type: Sequelize.STRING,
        },
        //
        corporateDomicileCounty: {
            type: Sequelize.STRING,
        },
        //
        corporateDomicileAddress: {
            type: Sequelize.STRING,
        },
        //
        corporateDomicileCity: {
            type: Sequelize.STRING,
        },
        //
        corporateDomicileState: {
            type: Sequelize.STRING,
        },
        //
        corporateDomicileZip: {
            type: Sequelize.STRING,
        }

    });

    return CorporateStatus;
  };
