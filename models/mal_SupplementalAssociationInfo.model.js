// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const SupplementalAssociationInfo = sequelize.define("SupplementalAssociationInfo", {
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
        designatedSiteAddress: {
            type: Sequelize.STRING,
        },
        //
        city: {
            type: Sequelize.STRING,
        },
        //
        zipCode: {
            type: Sequelize.STRING,
        },
        //
        phoneNumber: {
            type: Sequelize.STRING,
        },
        //
        associationWebsite: {
            type: Sequelize.STRING,
        },
        //
        associationEmail: {
            type: Sequelize.STRING,
        },
        //
        numberUnitsLotsDeveloped: {
            type: Sequelize.STRING,
        },
        //
        // TODO: Might be different datatype
        community55Plus: {
            type: Sequelize.STRING,
        },
        //
        associationControlledBy: {
            type: Sequelize.STRING,
        },
        //
        approxTurnoverDate: {
            type: Sequelize.DATEONLY,
        },
        //
        masterOrSub: {
            type: Sequelize.STRING,
        },
        //
        subAssociations: {
            type: Sequelize.STRING,
        },
        //
        masterAssociation: {
            type: Sequelize.STRING,
        },
        //
        registeredAgent: {
            type: Sequelize.STRING,
        },
        //
        dateRA: {
            type: Sequelize.DATEONLY,
        },
        //
        clubhouse: {
            type: Sequelize.STRING,
        },
        //
        assessments: {
            type: Sequelize.STRING,
        },
        //
        whatIntervals: {
            type: Sequelize.STRING,
        },
        //
        availableToRent: {
            type: Sequelize.STRING,
        },
        //
        price: {
            type: Sequelize.STRING,
        },
        //
        theaterSeatingAmount: {
            type: Sequelize.STRING,
        },
        //
        tableChairsAmount: {
            type: Sequelize.STRING,
        },
        //
        typeOfTables: {
            type: Sequelize.STRING,
        },
        //
        additionalNotes: {
            type: Sequelize.TEXT,
        },

    });
  
    return SupplementalAssociationInfo;
  };