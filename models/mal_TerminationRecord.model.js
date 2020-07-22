module.exports = (sequelize, Sequelize) => {
    const TerminationRecord = sequelize.define("TerminationRecord", {
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
        dateTerminated: {
            type: Sequelize.STRING,
        },
        //
        reasonTerminated: {
            type: Sequelize.STRING,
        },
        //
        revenueGenerated: {
            type: Sequelize.STRING,
        },
        //
        terminatingNotes: {
            type: Sequelize.STRING,
        },
        //
        terminationOrigin: {
            type: Sequelize.STRING,
        },
        //
        realReasonTerminated: {
            type: Sequelize.STRING,
        }
    });
  
    return TerminationRecord;
  };