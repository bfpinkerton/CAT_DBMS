module.exports = (sequelize, Sequelize) => {
    const ReferralSource = sequelize.define("ReferralSource", {
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
            type: Sequelize.STRING,
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
  
    return ReferralSource;
  };