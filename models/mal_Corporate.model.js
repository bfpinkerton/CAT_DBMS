// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const Corporate = sequelize.define("Corporate", {
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
        totalMgrs: {
            type: Sequelize.STRING,
        },
        //
        totalAssociationClients: {
            type: Sequelize.STRING,
        },
        //
        numberClientAssociations: {
            type: Sequelize.STRING,
        },
        //
        servicesDescription: {
            type: Sequelize.TEXT,
        },
        //
        countiesServiced: {
            type: Sequelize.STRING,
        }

    });

    return Corporate;
  };
