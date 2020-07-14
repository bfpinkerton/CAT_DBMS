// Overall database and user model
const db = require("../models");
const MAL = db.mal;

// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const MerchandiseFloridaStatue = sequelize.define("MerchandiseFloridaStatue", {
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
        noSocialMedia: {
            type: Sequelize.BOOLEAN,
        },
        //
        hasFacebook: {
            type: Sequelize.BOOLEAN,
        },
        //
        facebookAccount: {
            type: Sequelize.STRING,
        },
        //
        facebookDate: {
            type: "TIMESTAMP",
        },
        //
        hasLinkedin: {
            type: Sequelize.BOOLEAN,
        },
        //
        linkedinAccount: {
            type: Sequelize.STRING,
        },
        //
        linkedinDate: {
            type: "TIMESTAMP",
        },
        //
        hasTwitter: {
            type: Sequelize.BOOLEAN,
        },
        //
        twitterAccount: {
            type: Sequelize.STRING,
        },
        //
        twitterDate: {
            type: "TIMESTAMP",
        },
        //
        hasInstagram: {
            type: Sequelize.BOOLEAN,
        },
        //
        instagramAccount: {
            type: Sequelize.STRING,
        },
        //
        instagramDate: {
            type: "TIMESTAMP",
        },
    });
  
    return MerchandiseFloridaStatue;
  };