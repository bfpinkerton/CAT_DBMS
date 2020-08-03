// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const RepresentationInquiries = sequelize.define("RepresentationInquiries", {
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
        cmServicesRequest: {
            type: Sequelize.STRING,
        },
        //
        originationSource: {
            type: Sequelize.STRING,
        },
        //
        cmSponsored: {
            type: Sequelize.STRING,
        },
        //
        source: {
            type: Sequelize.STRING,
        },
        dateRequested: {
            type: Sequelize.STRING,
        },

    });
  
    return RepresentationInquiries;
  };