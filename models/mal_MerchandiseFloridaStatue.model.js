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
        statuePurchaseStatus: {
            type: Sequelize.BOOLEAN,
        },
        //
        dateRequested: {
            type: "TIMESTAMP",
        },
        //
        quantity: {
            type: Sequelize.INTEGER,
        },
        //
        whichBook: {
            type: Sequelize.STRING,
        },
        //
        referralSource: {
            type: Sequelize.STRING,
        },
        //
        referralSourceOther: {
            type: Sequelize.STRING,
        },
        //
        soldBy: {
            type: Sequelize.STRING,
        },
        //
        deliveryMethod: {
            type: Sequelize.STRING,
        },
        //
        paymentMethod: {
            type: Sequelize.STRING,
        },
        //
        checkNumber: {
            type: Sequelize.INTEGER,
        },

    });
  
    return MerchandiseFloridaStatue;
  };