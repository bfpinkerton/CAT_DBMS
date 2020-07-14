// Overall database and user model
const db = require("../models");
const MAL = db.mal;

// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const RepresentationInquiries = sequelize.define("RepresentationInquiries", {
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
        cmServicesRequest: {
            type: Sequelize.STRING,
        },
        //
        originationSource: {
            type: Sequelize.STRING,
        },
        //
        cmSponsored: {
            type: Sequelize.BOOLEAN,
        },
        //
        source: {
            type: Sequelize.STRING,
        },
        dateRequested: {
            type: "TIMESTAMP",
        },

    });
  
    return RepresentationInquiries;
  };