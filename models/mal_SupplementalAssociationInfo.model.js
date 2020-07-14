// Overall database and user model
const db = require("../models");
const MAL = db.mal;

// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const SupplementalAssociationInfo = sequelize.define("SupplementalAssociationInfo", {
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
        designatedSiteAddress: {
            type: Sequelize.STRING,
        },
        //
        city: {
            type: Sequelize.STRING,
        },
        //
        zipCode: {
            type: Sequelize.INTEGER,
        },
        //
        phoneNumber: {
            type: Sequelize.INTEGER,
        },
        //
        associationWebsite: {
            type: Sequelize.STRING,
        },
        //
        associationEmail: {
            type: Sequelize.STRING,
        },
        //
        numberUnitsLotsDeveloped: {
            type: Sequelize.INTEGER,
        },
        //
        // TODO: Might be different datatype
        community55Plus: {
            type: Sequelize.BOOLEAN,
        },
        //
        associationControlledBy: {
            type: Sequelize.BOOLEAN,
        },
        //
        approxTurnoverDate: {
            type: "TIMESTAMP",
        },
        //
        masterOrSub: {
            type: Sequelize.BOOLEAN,
        },
        //
        subAssociations: {
            type: Sequelize.STRING,
        },
        //
        masterAssociation: {
            type: Sequelize.STRING,
        },
        //
        registeredAgent: {
            type: Sequelize.STRING,
        },
        //
        dateRA: {
            type: "TIMESTAMP",
        },
        //
        clubhouse: {
            type: Sequelize.BOOLEAN,
        },
        //
        assessments: {
            type: Sequelize.STRING,
        },
        //
        whatIntervals: {
            type: Sequelize.STRING,
        },
        //
        availableToRent: {
            type: Sequelize.BOOLEAN,
        },
        //
        price: {
            type: Sequelize.DECIMAL,
        },
        //
        theaterSeatingAmount: {
            type: Sequelize.INTEGER,
        },
        //
        tableChairsAmount: {
            type: Sequelize.INTEGER,
        },
        //
        typeOfTables: {
            type: Sequelize.STRING,
        },
        //
        additionalNotes: {
            type: Sequelize.TEXT,
        },

    });
  
    return SupplementalAssociationInfo;
  };