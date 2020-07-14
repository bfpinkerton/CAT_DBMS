// Overall database and user model
const db = require("../models");
const MAL = db.mal;

// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const MerchandiseMug = sequelize.define("MerchandiseMug", {
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
        mugPurchaseStatus: {
            type: Sequelize.BOOLEAN,
        },
        //
        originationSaleSource: {
            type: Sequelize.STRING,
        },
        //
        datePurchased: {
            type: "TIMESTAMP",
        },
        //
        quantity: {
            type: Sequelize.INTEGER,
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
  
    return MerchandiseMug;
  };