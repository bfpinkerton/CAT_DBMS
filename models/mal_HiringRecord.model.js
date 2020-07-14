// Overall database and user model
const db = require("../models");
const MAL = db.mal;

// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const HiringRecord = sequelize.define("HiringRecord", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            // defaultValue: '0',
            primaryKey: true
        },
        // What MAL entry is this relating to
        MALrelatedID: {
            type: Sequelize.INTEGER,
            references: {
                // This is a reference to another model
                model: MAL,
                // This is the column name of the referenced model
                key: 'id'
            }
        },
        //
        dateHired: {
            type: "TIMESTAMP",
        },
        //
        reasonsHired: {
            type: Sequelize.STRING,
        },
        //
        hiringComments: {
            type: Sequelize.STRING,
        },
        //
        typeofRepresentation: {
            type: Sequelize.STRING,
        },
        //
        date: {
            type: "TIMESTAMP",
        },
        //
        sourceOfReferralName: {
            type: Sequelize.STRING,
        },
        //
        position: {
            type: Sequelize.STRING,
        },
        //
        companyAssociation: {
            type: Sequelize.STRING,
        },
        //
        primaryFirm: {
            type: Sequelize.STRING,
        },
        //
        otherFirms: {
            type: Sequelize.STRING,
        },
        //
        forWhatPurpose: {
            type: Sequelize.STRING,
        },
        //
        formerFirm: {
            type: Sequelize.STRING,
        },

        
    });
  
    return HiringRecord;
  };