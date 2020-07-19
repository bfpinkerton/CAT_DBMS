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
                model: 'MALs',
                // This is the column name of the referenced model
                key: 'id'
            }
        },
        //
        mugPurchaseStatus: {
            type: Sequelize.STRING,
        },
        //
        originationSaleSource: {
            type: Sequelize.STRING,
        },
        //
        datePurchased: {
            type: Sequelize.DATEONLY,
        },
        //
        quantity: {
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
            type: Sequelize.STRING,
        },
    });
  
    return MerchandiseMug;
  };