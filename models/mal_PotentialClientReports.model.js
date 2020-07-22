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
        originationDatePC: {
            type: Sequelize.STRING,
        },
        //
        staffInitialsPC: {
            type: Sequelize.STRING(3),
        },
        //
        staffAssignedPC: {
            type: Sequelize.STRING,
        },
        //
        newestEventDate: {
            type: Sequelize.STRING,
        },
        //
        staffInitialsEvent: {
            type: Sequelize.STRING(3),
        },
        //
        followUpType: {
            type: Sequelize.STRING,
        },
        //
        nextFollowUpDate: {
            type: Sequelize.STRING,
        },
        //
        staffInitialsFollowUp: {
            type: Sequelize.STRING,
        },
        //
        fileType: {
            type: Sequelize.STRING,
        },
        //
        fileDate: {
            type: Sequelize.STRING,
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
            type: Sequelize.STRING,
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
            type: Sequelize.STRING,
        },
        //
        eventsChain: {
            type: Sequelize.STRING,
        },
        //
        chainDate: {
            type: Sequelize.STRING,
        },
        //
        chainOriginator: {
            type: Sequelize.STRING,
        },
        //
        chainInitials: {
            type: Sequelize.STRING(3),
        },
        //
        chainInputDate: {
            type: Sequelize.STRING,
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
            type: Sequelize.STRING,
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
            type: Sequelize.STRING,
        },
        //
        endingDate: {
            type: Sequelize.STRING,
        },
        //
        closingDate: {
            type: Sequelize.STRING,
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