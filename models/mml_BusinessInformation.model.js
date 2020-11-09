// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const BusinessInformation = sequelize.define("BusinessInformation", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            // defaultValue: '0',
            primaryKey: true
        },
        // What MML entry is this relating to
        MMLrelatedID: {
            type: Sequelize.INTEGER,
            references: {
                // This is a reference to another model
                model: 'MMLs',
                // This is the column name of the referenced model
                key: 'id'
            }
        },
        //
        workBranchAddress: {
            type: Sequelize.STRING,
        },
        //
        city: {
            type: Sequelize.STRING,
        },
        //
        state: {
            type: Sequelize.STRING,
        },
        //
        zip: {
            type: Sequelize.STRING,
        },
        //
        county: {
            type: Sequelize.STRING,
        },
        //
        landlinePhone: {
            type: Sequelize.STRING,
        },
        //
        extension: {
            type: Sequelize.STRING,
        },
        //
        cellPhone: {
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
        workEmail: {
            type: Sequelize.STRING,
        },
        //
        workNotes: {
            type: Sequelize.TEXT,
        },
        

    });
  
    return BusinessInformation;
  };