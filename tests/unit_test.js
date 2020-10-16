var assert = require('assert');

const db = require("../models");
const User = db.users;


describe('User', function () {

    before(async function() {

        const newUser1 = {
            fName: 'first_name_TEST',
            lName: 'last_name',
            email: 'email@test.com',
            password: 1234,
            creation: '1990-05-12 12:12:12',
            admin: 1,
            readOnly: 0
        };

        const newUser2 = {
            fName: 'first_name_TEST',
            lName: 'last_name_2',
            email: 'email2@test.com',
            password: 12344,
            creation: '1990-05-12 12:12:12',
            admin: 0,
            readOnly: 1
        };

        User.create(newUser1);
        User.create(newUser2);
    });

    after(async function() {
        // await db.sequelize.query('delete from users where fname="first_name_TEST"');
    });

    describe('#register', function () {

        it('should correctly assign readOnly variable', async function () {
            const user = await db.sequelize.query('select * from users where fname="first_name_TEST"');
            console.log(user)
            assert(user[0][0].readOnly == 0);
            assert(user[0][1].readOnly == 1);
        });

        it('should correctly assign admin variable', async function () {
            const user = await db.sequelize.query('select * from users where fname="first_name_TEST"');
            assert(user[0][0].admin == 1);
            assert(user[0][1].admin == 0);
        });

    });

});
