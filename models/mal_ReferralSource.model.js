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
        date: {
            type: "TIMESTAMP",
        },
        //
        referredBy: {
            type: Sequelize.STRING,
        },
        //
        position: {
            type: Sequelize.STRING,
        },
        //
        company: {
            type: Sequelize.STRING,
        },
        //
        ifOrganizationMeeting: {
            type: Sequelize.STRING,
        }
        
    });
  
    return HiringRecordMAL;
  };