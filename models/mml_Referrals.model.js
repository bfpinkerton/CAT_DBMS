// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const Referrals = sequelize.define("Referrals", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            // defaultValue: '0',
            primaryKey: true
        },
        // What MML entry is this relating to
        MMLrelatedID: {
            type: Sequelize.INTEGER,
            references: {
                // This is a reference to another model
                model: 'MMLs',
                // This is the column name of the referenced model
                key: 'id'
            }
        },
        //
        referralDate: {
            type: Sequelize.STRING,
        },
        //
        staff: {
            type: Sequelize.STRING,
        },
        //
        dateEntered: {
            type: Sequelize.STRING,
        },
        //
        mgmtCoName: {
            type: Sequelize.STRING,
        },
        //
        office: {
            type: Sequelize.STRING,
        },
        //
        legalNameReferredAssociation: {
            type: Sequelize.STRING,
        },
        //
        county: {
            type: Sequelize.STRING,
        },
        //
        referralTitle: {
            type: Sequelize.STRING,
        },
        //
        referralSource: {
            type: Sequelize.STRING,
        },
        //
        status: {
            type: Sequelize.STRING,
        },
        //
        gift: {
            type: Sequelize.STRING,
        },
        //
        referralPriority: {
            type: Sequelize.STRING,
        },
        //
        referralType: {
            type: Sequelize.STRING,
        },
        //
        associationWentTo: {
            type: Sequelize.STRING,
        },
        //
        staffInitials: {
            type: Sequelize.STRING,
        },
        //
        dateClosed: {
            type: Sequelize.STRING,
        },
        //
        notes: {
            type: Sequelize.TEXT,
        },

    });
  
    return Referrals;
  };