module.exports = (sequelize, Sequelize) => {
    const Updates = sequelize.define("Updates", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            // defaultValue: '0',
            primaryKey: true
        },
        // What MAL entry is this relating to
        MALrelatedID: {

        },
        // Which table does this entry relate to?
        relatedTable: {
            type: Sequelize.STRING,
            allowNull: false
        },
        // Pull from passed-in user
        updateAuthor: {
            type: Sequelize.STRING,
            allowNull: false
        },
        // Pull from current date when modified
        updateDate: {
            type: "TIMESTAMP",
            allowNull: false
        },
        // Json object of multiple quadruplets
        // Track all fields that change between updates — Updated field, before, after
        // EX: "Field, Sections: Brandon --> Brian", tracking "Name" "Old" "New"
        // TODO
        updateTracking: {
            type: Sequelize.JSON,
            allowNull: false
        },
        // Textbox for author to leave remarks on what has been changed
        // TODO: Should this be Text/Medium Text/Long Text
        updateNote: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    });
  
    return Updates;
  };