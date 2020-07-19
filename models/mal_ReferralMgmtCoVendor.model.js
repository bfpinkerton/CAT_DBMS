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
        requestDate: {
            type: Sequelize.DATEONLY,
        },
        //
        requestedBy: {
            type: Sequelize.STRING,
        },
        //
        title: {
            type: Sequelize.STRING,
        },
        //
        forWhatBusiness: {
            type: Sequelize.STRING,
        }

    });
  
    return HiringRecordMAL;
  };