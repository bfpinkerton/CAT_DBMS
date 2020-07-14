// Overall database and user model
const db = require(".");
const MAL = db.mal;

module.exports = (sequelize, Sequelize) => {
    const HiringRecordMAL = sequelize.define("HiringRecordMAL", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            // defaultValue: '0',
            primaryKey: true
        },
        // FOREIGN KEY: What MAL entry is this relating to
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
        requestDate: {
            type: "TIMESTAMP",
        },
        //
        requestedBy: {
            type: Sequelize.STRING,
        },
        //
        title: {
            type: Sequelize.STRING,
        },
        //
        forWhatBusiness: {
            type: Sequelize.STRING,
        }

    });
  
    return HiringRecordMAL;
  };