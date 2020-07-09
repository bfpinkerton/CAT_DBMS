
module.exports = (sequelize, Sequelize) => {
    const BoardMembers = sequelize.define("BoardMembers", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            // defaultValue: '0',
            primaryKey: true
        },
        // What entry is this relating to
        relatedID: {
            
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