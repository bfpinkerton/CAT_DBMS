// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const GeneralInformation = sequelize.define("GeneralInformation", {
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
        mktgStatus: {
            type: Sequelize.STRING,
        },
        //
        statusCategory: {
            type: Sequelize.STRING,
        },
        //
        license: {
            type: Sequelize.BOOLEAN,
        },
        //
        licenseNo: {
            type: Sequelize.STRING,
        },
        //
        licenseDate: {
            type: Sequelize.STRING,
        },
        // Mr/Ms
        title: {
            type: Sequelize.STRING,
        },
        // Male/Female
        gender: {
            type: Sequelize.STRING,
        },
        //
        firstName: {
            type: Sequelize.STRING,
        },
        //
        lastName: {
            type: Sequelize.STRING,
        },
        //
        otherNames: {
            type: Sequelize.STRING,
        },
        //
        preferredTitle: {
            type: Sequelize.STRING,
        },
        //
        dispositionTowardCM: {
            type: Sequelize.STRING,
        },

    });
  
    return GeneralInformation;
  };