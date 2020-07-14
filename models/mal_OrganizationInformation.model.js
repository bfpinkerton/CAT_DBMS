// Overall database and user model
const db = require("../models");
const MAL = db.mal;

// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const OrganizationInformation = sequelize.define("OrganizationInformation", {
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
        ACA: {
            type: Sequelize.BOOLEAN,
        },
        //
        chapter: {
            type: Sequelize.STRING,
        },
        dateRequestedACA: {
            type: "TIMESTAMP",
        },
        followupDateACA: {
            type: "TIMESTAMP",
        },
        //
        AACONA: {
            type: Sequelize.BOOLEAN,
        },
        //
        dateRequestedAACONA: {
            type: "TIMESTAMP",
        },
        //
        followupDateAACONA: {
            type: "TIMESTAMP",
        },

    });
  
    return OrganizationInformation;
  };