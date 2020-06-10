module.exports = {
    up(queryInterface, Sequelize) {
      return Promise.all([
        queryInterface.addColumn(
          'users', // table name
          'fName', // new field name
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
        ),
        queryInterface.addColumn(
          'users',
          'lName',
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
        )
      ]);
    },
  
    down(queryInterface, Sequelize) {
      // logic for reverting the changes
      return Promise.all([
        queryInterface.removeColumn('users', 'fName'),
        queryInterface.removeColumn('users', 'lName'),
      ]);
    },
  };



//   module.exports = {
//     up(queryInterface, Sequelize) {
//       return Promise.all([
//         queryInterface.addColumn(
//           'users', // table name
//           'fName', // new field name
//           {
//             type: Sequelize.STRING,
//             allowNull: false,
//           },
//         ),
//         queryInterface.addColumn(
//           'users',
//           'lName',
//           {
//             type: Sequelize.STRING,
//             allowNull: false,
//           },
//         )
//       ]);
//     },
  
//     down(queryInterface, Sequelize) {
//       // logic for reverting the changes
//       return Promise.all([
//         queryInterface.removeColumn('users', 'fName'),
//         queryInterface.removeColumn('users', 'lName'),
//       ]);
//     },
//   };