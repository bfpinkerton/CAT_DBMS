// Overall database and user model
const db = require("../models");
const MAL = db.mal;

module.exports = (sequelize, Sequelize) => {
    const TerminationRecordMAL = sequelize.define("TerminationRecordMAL", {
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
        // What MAL entry is this relating to
        // MMLrelatedID: {

        // },
        // Which table does this entry relate to?
        relatedTable: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
  
    return TerminationRecordMAL;
  };