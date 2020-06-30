/*
    ROUTING MODEL for MML
*/

const express = require('express');
const router = express.Router();
const passport = require('passport');
const moment = require('moment');
const db = require("../models");

// User model
const User = db.users;

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
    res.render('pages/mml/dashboard', );
});

module.exports = router;