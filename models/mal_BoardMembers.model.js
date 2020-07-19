// Table columns defined below
// Each column *should* match associated fields within application view
module.exports = (sequelize, Sequelize) => {
    const BoardMembers = sequelize.define("BoardMembers", {
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
        // --Additional fields as related to Create form --

        // ------------------------------------------------
        // --Does each Board Member only need 1 seminar information entry?--
        // ^ This will dictate the need for an additional table
        // TODO: Multiple seminar entries --> Separate table
        seminarInfo: {
            
        },
    });
  
    return BoardMembers;
  };