module.exports = (sequelize, Sequelize) => {
    const HiringRecordMAL = sequelize.define("HiringRecordMAL", {
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
        date: {
            type: Sequelize.DATEONLY,
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