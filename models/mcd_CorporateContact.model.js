// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const CorporateContact = sequelize.define("CorporateContact", {
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
        name: {
            type: Sequelize.STRING,
        },
        //
        title: {
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
        website: {
            type: Sequelize.STRING,
        },
        //
        emailStyle: {
            type: Sequelize.STRING,
        },
        //
        companyManages: {
            type: Sequelize.STRING,
        }

    });

    return CorporateContact;
  };
