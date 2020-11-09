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
            type: Sequelize.BOOLEAN,
        },
        //
        staff: {
            type: Sequelize.BOOLEAN,
        },
        //
        dateEntered: {
            type: Sequelize.BOOLEAN,
        },
        //
        mgmtCoName: {
            type: Sequelize.BOOLEAN,
        },
        //
        office: {
            type: Sequelize.BOOLEAN,
        },
        //
        legalNameReferredAssociation: {
            type: Sequelize.BOOLEAN,
        },
        //
        county: {
            type: Sequelize.BOOLEAN,
        },
        //
        referralTitle: {
            type: Sequelize.BOOLEAN,
        },
        //
        referralSource: {
            type: Sequelize.BOOLEAN,
        },
        //
        status: {
            type: Sequelize.BOOLEAN,
        },
        //
        gift: {
            type: Sequelize.BOOLEAN,
        },
        //
        referralPriority: {
            type: Sequelize.BOOLEAN,
        },
        //
        referralType: {
            type: Sequelize.BOOLEAN,
        },
        //
        associationWentTo: {
            type: Sequelize.BOOLEAN,
        },
        //
        staffInitials: {
            type: Sequelize.BOOLEAN,
        },
        //
        dateClosed: {
            type: Sequelize.BOOLEAN,
        },
        //
        notes: {
            type: Sequelize.TEXT,
        },

    });
  
    return Referrals;
  };