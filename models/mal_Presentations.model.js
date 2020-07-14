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
        requestedBy: {
            type: Sequelize.STRING,
        },
        //
        position: {
            type: Sequelize.STRING,
        },
        //
        primaryAttorney: {
            type: Sequelize.STRING,
        },
        //
        staffMemberAttending: {
            type: Sequelize.STRING,
        },
        //
        location: {
            type: Sequelize.STRING,
        },
        //
        mgmtCoAndOffice: {
            type: Sequelize.STRING,
        },
        //
        method: {
            type: Sequelize.STRING,
        },
        //
        whoAttendedFromAssociation: {
            type: Sequelize.STRING,
        },
        //
        issuesDiscussed: {
            type: Sequelize.STRING,
        },
        //
        totalPresentationTime: {
            type: Sequelize.STRING,
        },
        //
        outcome: {
            type: Sequelize.STRING,
        },
        //
        hired: {
            type: Sequelize.STRING,
        },
        //
        reasonsFirmSelected: {
            type: Sequelize.STRING,
        }
    });
  
    return HiringRecordMAL;
  };