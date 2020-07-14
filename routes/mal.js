/*
    ROUTING MODEL for MAL
*/

const express = require('express');
const router = express.Router();
const passport = require('passport');
const moment = require('moment');
const db = require("../models");

// User model
const User = db.users;
const MAL = db.mal;

// Ensure authenticated user is logged in
const {
    ensureAuthenticated
} = require('../config/auth');

// ------------------------------------------------------------------

// GET home page
router.get('/dashboard', ensureAuthenticated, async function (req, res, next) {
    req.flash('success', "Please choose an action from the top menu");
    res.locals.message = req.flash();
    req.app.locals.user = req.user;
    res.render('pages/mal/dashboard', );
});

// GET create page
router.get('/create', ensureAuthenticated, async function (req, res, next) {
    req.app.locals.user = req.user;
    req.app.locals.date = moment().format('MMMM Do YYYY');
    res.render('pages/mal/create', );
});

// Create handle
router.post('/create', ensureAuthenticated, function (req, res, next) {
    // Structure all element values
    const {
        //Element names
        first_name,
        last_name,
        email,
        confirm_email_address,
        password,
        password2
    } = req.body;

    // Create MAL object
    const newEntry = {
        fName: first_name,
        lName: last_name,
        email: email,
        password: password,
        creation: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    };

    // Create MAL entry with object data
    MAL.create(newEntry)
                .then(data => {
                    req.flash('success','New user successfully added.');
                    res.locals.message = req.flash();
                    // TODO: Create new records for children tables
                    res.redirect("/entry");
                })
                .catch(err => console.log(err));

    res.redirect("/create");
});

// GET entry page
router.get('/entry', ensureAuthenticated, async function (req, res, next) {
    req.app.locals.user = req.user;
    req.app.locals.date = moment().format('MMMM Do YYYY');
    res.render('pages/mal/entry', );
});



module.exports = router;