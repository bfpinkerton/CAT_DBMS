// Overall database and user model
const db = require(".");
const MAL = db.mal;

module.exports = (sequelize, Sequelize) => {
    const TerminationRecord = sequelize.define("TerminationRecord", {
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
        dateTerminated: {
            type: "TIMESTAMP",
        },
        //
        reasonTerminated: {
            type: Sequelize.STRING,
        },
        //
        revenueGenerated: {
            type: Sequelize.DECIMAL,
        },
        //
        terminatingNotes: {
            type: Sequelize.STRING,
        },
        //
        terminationOrigin: {
            type: Sequelize.STRING,
        },
        //
        realReasonTerminated: {
            type: Sequelize.STRING,
        }
    });
  
    return TerminationRecord;
  };