// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const GeneralBoardInfo = sequelize.define("GeneralBoardInfo", {
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
        corporateStatus: {
            type: Sequelize.STRING,
        },
        //
        annualMeetingMonth: {
            type: Sequelize.STRING,
        },
        //
        lastCorporateReportDate: {
            type: Sequelize.STRING,
        },
        //
        currentBoardExpirationDate: {
            type: Sequelize.STRING,
        },
        //
        associationSeminarAdmittandance: {
            type: Sequelize.STRING,
        },
        //
        associationSeminarTagColor: {
            type: Sequelize.STRING,
        },
        //
        numberDirectorsFullyStaffed: {
            type: Sequelize.STRING,
        },
        //
        dateAssociationUpdatedWhole: {
            type: Sequelize.STRING,
        },

    });
  
    return GeneralBoardInfo;
  };