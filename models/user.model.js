module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      creation: {
        type: "TIMESTAMP",
        allowNull: false
      },
      resetPassTkn: {
        type: Sequelize.STRING
      },
      resetPassExp: {
        type: Sequelize.DATE
      },
      updateEmailTmp: {
        type: Sequelize.STRING
      },
      updateEmailTkn: {
        type: Sequelize.STRING
      },
      updateEmailExp: {
        type: Sequelize.DATE
      }
    });
  
    return User;
  };