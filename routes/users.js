/*
    ROUTING MODEL for Users
*/

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const moment = require('moment');
const db = require("../models");

// User model
const User = db.users;

// require("../config/passport")(passport);

// Ensure authenticated user is logged in
const {
    ensureAuthenticated
} = require('../config/auth');

// Ensure user has admin permissions
const {
    ensureAdmin
} = require('../config/admin');

// ------------------------------------------------------------------

// GET home page
router.get('/dashboard', ensureAuthenticated, async function (req, res, next) {
    req.flash('success', "Please choose a utility from the sidebar");
    res.locals.message = req.flash();
    req.app.locals.user = req.user;
    // var date = moment().format('MMMM Do YYYY');
    res.render('pages/users/dashboard', );
});

// GET register user page
router.get('/register', /*ensureAdmin,*/ function (req, res, next) {
    res.locals.message = req.flash();
    res.render('pages/users/register');
});

// Register Handle
// TODO: Check for existing account with same email
router.post('/register', /*ensureAdmin,*/ (req, res) => {
    const {
        first_name,
        last_name,
        email,
        confirm_email_address,
        password,
        password2,
        admin,
        readOnly
    } = req.body;

    if (password != password2 || confirm_email_address != email) {
        if (password != password2) {
            req.flash('failure', "Passwords don't match");
        }
        if (confirm_email_address != email) {
            req.flash('failure', "Email's don't match");
        }
        res.locals.message = req.flash();
        res.render('pages/users/register');
        return;
    }
        
    // Create user object
    const newUser = {
        fName: first_name,
        lName: last_name,
        email: email,
        password: password,
        creation: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
        admin: admin? 1:0,
        readOnly: readOnly? 1:0
    };

    // Hash user password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            // Assign user password as hashed password 
            newUser.password = hash;
            // Insert user into DB
            User.create(newUser)
                .then(data => {
                    req.flash('success','New user successfully added.');
                    res.locals.message = req.flash();
                    res.render('pages/users/register');
                })
                .catch(err => console.log(err));
        });
    })
});

// GET delete user page
router.get('/delete', ensureAdmin, async function (req, res, next) {
    try {
        const users = await db.sequelize.query("select * from users where admin = '0'", { type: db.sequelize.QueryTypes.SELECT});
        req.app.locals.users = users;
        if (users.length == 0) {
            req.flash('failure', 'No existing non-admin users');
            res.locals.message = req.flash();
            res.redirect('/home');
        }
        res.locals.message = req.flash();
        res.render('pages/users/delete');
    }
    catch (err) {
        console.log(err);
        req.flash('failure', 'Error db lookup failed');
        res.locals.message = req.flash();
        res.redirect('/home');
    }
});


/* 
    Delete specified user
*/
router.delete('/delete/:id', ensureAdmin, (req, res) => {
    db.sequelize.query("DELETE FROM users WHERE id = '"+req.params.id+"'", { type: db.sequelize.QueryTypes.DELETE})
        .catch(err => {
            req.flash('failure', err);
            res.locals.message = req.flash();
            req.redirect('../delete');
        })
    req.flash('success', 'User has been deleted.')
    res.locals.message = req.flash();
    res.redirect('../delete');
});


// Login Handle
router.post('/login', (req, res, next) => {
    console.log("here");
    passport.authenticate('local', {
        // Redirects on both success and fail
        successRedirect: '../users/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});


// Logout Handle
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success','You have been logged out.');
    res.redirect('/login');
});

/**  Require authentication for all the routes below */
// router.all('*',ensureAuthenticated);

module.exports = router;