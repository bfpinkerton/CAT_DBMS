'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "mega-migration",
    "created": "2020-07-11T06:27:32.813Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
        fn: "createTable",
        params: [
            "Users",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "fName": {
                    "type": Sequelize.STRING,
                    "field": "fName",
                    "allowNull": false
                },
                "lName": {
                    "type": Sequelize.STRING,
                    "field": "lName",
                    "allowNull": false
                },
                "email": {
                    "type": Sequelize.STRING,
                    "field": "email",
                    "allowNull": false
                },
                "password": {
                    "type": Sequelize.STRING,
                    "field": "password",
                    "allowNull": false
                },
                "admin": {
                    "type": Sequelize.BOOLEAN,
                    "field": "admin",
                    "allowNull": false,
                    "defaultValue": false
                },
                "creation": {
                    "type": Sequelize.undefined,
                    "field": "creation",
                    "allowNull": false
                },
                "resetPassTkn": {
                    "type": Sequelize.STRING,
                    "field": "resetPassTkn"
                },
                "resetPassExp": {
                    "type": Sequelize.DATE,
                    "field": "resetPassExp"
                },
                "updateEmailTmp": {
                    "type": Sequelize.STRING,
                    "field": "updateEmailTmp"
                },
                "updateEmailTkn": {
                    "type": Sequelize.STRING,
                    "field": "updateEmailTkn"
                },
                "updateEmailExp": {
                    "type": Sequelize.DATE,
                    "field": "updateEmailExp"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {
                "transaction": transaction
            }
        ]
    }];
};
var rollbackCommands = function(transaction) {
    return [{
        fn: "dropTable",
        params: ["Users", {
            transaction: transaction
        }]
    }];
};

module.exports = {
    pos: 0,
    useTransaction: true,
    execute: function(queryInterface, Sequelize, _commands)
    {
        var index = this.pos;
        function run(transaction) {
            const commands = _commands(transaction);
            return new Promise(function(resolve, reject) {
                function next() {
                    if (index < commands.length)
                    {
                        let command = commands[index];
                        console.log("[#"+index+"] execute: " + command.fn);
                        index++;
                        queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                    }
                    else
                        resolve();
                }
                next();
            });
        }
        if (this.useTransaction) {
            return queryInterface.sequelize.transaction(run);
        } else {
            return run(null);
        }
    },
    up: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, migrationCommands);
    },
    down: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, rollbackCommands);
    },
    info: info
};
