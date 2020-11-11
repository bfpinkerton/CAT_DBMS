// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const HomeInformation = sequelize.define("HomeInformation", {
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
        address: {
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
        emailAddress: {
            type: Sequelize.STRING,
        },
        //
        homePhone: {
            type: Sequelize.STRING,
        },
        //
        homeNotes: {
            type: Sequelize.TEXT,
        },

    });
  
    return HomeInformation;
  };