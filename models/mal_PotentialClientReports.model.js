// Overall database and user model
const db = require(".");
const MAL = db.mal;

// Table columns defined below
// Each column *should* match associated fields within application view

module.exports = (sequelize, Sequelize) => {
    const PotentialClientReports = sequelize.define("PotentialClientReports", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            // defaultValue: '0',
            primaryKey: true
        },
        // FOREIGN KEY: What MAL entry (association) is this relating to
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
        originationDatePC: {
            type: "TIMESTAMP",
        },
        //
        staffInitialsPC: {
            type: "CHAR(3)",
        },
        //
        staffAssignedPC: {
            type: Sequelize.STRING,
        },
        //
        newestEventDate: {
            type: "TIMESTAMP",
        },
        //
        staffInitialsEvent: {
            type: "CHAR(3)",
        },
        //
        followUpType: {
            type: Sequelize.STRING,
        },
        //
        nextFollowUpDate: {
            type: "TIMESTAMP",
        },
        //
        staffInitialsFollowUp: {
            type: "CHAR(3)",
        },
        //
        fileType: {
            type: Sequelize.STRING,
        },
        //
        fileDate: {
            type: "TIMESTAMP",
        },
        //
        contactName: {
            type: Sequelize.STRING,
        },
        //
        position: {
            type: Sequelize.STRING,
        },
        //
        phoneNumber: {
            type: Sequelize.STRING,
        },
        //
        extension: {
            type: Sequelize.STRING,
        },
        //
        infoNote: {
            type: Sequelize.TEXT,
        },
        //
        currentLegalCouncil: {
            type: Sequelize.STRING,
        },
        //
        otherFirmsConsidered: {
            type: Sequelize.STRING,
        },
        //
        reasonForLeavingCurrent: {
            type: Sequelize.STRING,
        },
        //
        bestAspectCurrent: {
            type: Sequelize.STRING,
        },
        //
        // TODO: Choose correct datatype (probably timestamp)
        decisionExpected: {
            type: Sequelize.STRING,
        },
        //
        decisionBasis: {
            type: Sequelize.STRING,
        },
        //
        sincereRequest3rdParty: {
            type: Sequelize.STRING,
        },
        //
        CMNotifiedOnDecision: {
            type: Sequelize.STRING,
        },
        //
        currentFirmSelection: {
            type: Sequelize.STRING,
        },    
        //
        associationHeardCM: {
            type: Sequelize.STRING,
        },
        //
        whatEvent: {
            type: Sequelize.STRING,
        },
        //
        packageTypeRequested: {
        },
        //
        copyToName: {
            type: Sequelize.STRING,
        },
        //
        title: {
            type: Sequelize.STRING,
        },
        //
        mgmtCo: {
            type: Sequelize.STRING,
        },
        //
        copyDate: {
            type: "TIMESTAMP",
        },
        //
        eventsChain: {
            type: "VARCHAR",
        },
        //
        chainDate: {
            type: "TIMESTAMP",
        },
        //
        chainOriginator: {
            type: Sequelize.STRING,
        },
        //
        chainInitials: {
            type: "CHAR(3)",
        },
        //
        chainInputDate: {
            type: "TIMESTAMP",
        },
        //
        entryTotalTime: {
            type: Sequelize.STRING,
        },
        //
        entryNotes: {
            type: Sequelize.TEXT,
        },
        //
        fileClosingStatus: {
            type: Sequelize.STRING,
        },
        //
        fileClosingDate: {
            type: "TIMESTAMP",
        },
        //
        fileRemoveAfter: {
            type: Sequelize.STRING,
        },
        //
        closedFileStatus: {
            type: Sequelize.STRING,
        },
        //
        startingRoundDate: {
            type: "TIMESTAMP",
        },
        //
        endingDate: {
            type: "TIMESTAMP",
        },
        //
        closingDate: {
            type: "TIMESTAMP",
        },
        //
        spentTotalTime: {
            type: Sequelize.STRING,
        },
        //
        firmSelected: {
            type: Sequelize.STRING,
        },
        //
        firmSelectedOtherWhy: {
            type: Sequelize.STRING,
        },
        //
        otherFirmAdditionalReasons: {
            type: Sequelize.STRING,
        },
        //
        closingLetter: {
            type: Sequelize.STRING,
        },
        //
        finalStaffThoughts: {
            type: Sequelize.TEXT,
        }
    });
    
    return PotentialClientReports;
  };