var assert = require('assert');

// const express = require('express');
// const router = express.Router();
//
// const {
//     ensureAuthenticated
// } = require('../config/auth');

const db = require("../models");
const User = db.users;


describe('User', function () {

    describe('#register', async function () {

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

            await User.create(newUser1);
            await User.create(newUser2);
        });

        after(async function() {
            await db.sequelize.query('delete from users where fname="first_name_TEST"');
        });

        it('should correctly assign readOnly variable', async function () {
            const user = await db.sequelize.query('select * from users where fname="first_name_TEST"');
            // console.log(user)
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

describe('New form entries', async function () {

    describe('creates', async function () {

        before(async function() {
            // Mug purchase entry
            const MerchandiseMug = db.merchandiseMug;

            const entryMugPurchase = {
                // MALrelatedID: req.params.MAL_id,
                mugPurchaseStatus: 'Yes',
                originationSaleSource: 'sourceTEST',
                datePurchased: '10/31/2020',
                quantity: 5,
                deliveryMethod: 'testmail',
                paymentMethod: 'testcredit',
                checkNumber: 200,
            };

            // Florida statue entry
            const MerchandiseFloridaStatue = db.merchandiseFloridaStatue;

            const entryFloridaStatue = {
                // MALrelatedID: req.params.MAL_id,
                statuePurchaseStatus: 'Yes',
                dateRequested: '10/10/2020',
                quantity: 5,
                whichBook: 'bookTEST',
                referralSource: 'testref',
                referralSourceOther: 'testrefOther',
                soldBy: 'testseller',
                deliveryMethod: 'testdelivery',
                paymentMethod: 'testpayment',
                checkNumber: 100,
            };


            await MerchandiseMug.create(entryMugPurchase);
            await MerchandiseFloridaStatue.create(entryFloridaStatue);
        });

        after(async function() {
            await db.sequelize.query('delete from MerchandiseMugs where originationSaleSource="sourceTEST"');
            await db.sequelize.query('delete from MerchandiseFloridaStatues where whichBook="bookTEST"');
        });

        it('new mug purchase entry', async function () {
            const mug = await db.sequelize.query('select * from MerchandiseMugs where originationSaleSource="sourceTEST"');
            // console.log(mug);
            assert(mug[0][0].mugPurchaseStatus == 'Yes');
            assert(mug[0][0].quantity == '5');
            assert(mug[0][0].deliveryMethod == 'testmail');
        });

        it('new florida statue service', async function () {
            const statue = await db.sequelize.query('select * from MerchandiseFloridaStatues where whichBook="bookTEST"');
            console.log(statue);
            assert(statue[0][0].quantity == 5);
            assert(statue[0][0].soldBy == 'testseller');
            assert(statue[0][0].checkNumber == 100);
            assert(statue[0][0].paymentMethod == 'testpayment')
        });

    });

});
