/*
    ROUTING MODEL for Users (Caretakers)
*/

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
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



router.get('/register', ensureAdmin, function (req, res, next) {
    req.flash('success', 'Admin successfully authenticated');
    res.locals.message = req.flash();
    res.render('pages/users/register');
});

// GET home page
router.get('/home', ensureAuthenticated, async function (req, res, next) {
    req.app.locals.user = req.user;
    res.locals.success_messages = req.flash('success_messages');
    res.locals.error_messages = req.flash('error_messages');
    res.locals.failure_messages = req.flash('failure_messages');
    // var date = moment().format('MMMM Do YYYY');
    res.render('pages/users/home', );
});

// Register Handle
// TODO: Check for existing account with same email
router.post('/register', ensureAdmin, (req, res) => {
    const {
        first_name,
        last_name,
        email,
        confirm_email_address,
        password,
        password2
    } = req.body;

    if (password != password2) {
        res.render('pages/users/register', {
            message: req.flash('error', "Passwords don't match")
        });
        return;
    }
    if (confirm_email_address != email) {
        res.render('pages/users/register', {
            message: req.flash('error', "Email's don't match")
        });
        return;
    }
        
    // Create user object
    const newUser = {
        fName: first_name,
        lName: last_name,
        email: email,
        password: password,
        creation: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
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
                    res.redirect('/login');
                })
                .catch(err => console.log(err));
        });
    })
});


// Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        // Redirects on both success and fail
        successRedirect: '../users/home',
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


// Update Password Handle
// router.post('/changePassword', ensureAuthenticated, (req, res) => {
//     // Get params
//     const {
//         current_password,
//         new_password,
//         confirm_new_password
//     } = req.body;
//     // Compare new passwords 
//     if (new_password == confirm_new_password) {
//         // Verify user
//         bcrypt.compare(current_password, req.user.password, (err, isMatch) => {
//             if (isMatch) {
//                 // Hash password and update
//                 bcrypt.genSalt(10, (err, salt) => {
//                     bcrypt.hash(new_password, salt, (err, hash) => {
//                         if (err) throw err;
//                         // Reassign user password
//                         User.findOneAndUpdate({
//                                 "email": req.user.email
//                             }, {
//                                 $set: {
//                                     "password": hash
//                                 }
//                             },
//                             function (err) {
//                                 if (err) console.log(err);

//                             }
//                         );
//                         req.flash('success', 'Password successfully updated.')
//                         res.redirect('/users/settings');
//                     });
//                 });
//             } else {
//                 req.flash('error', 'Password incorrect')
//                 res.redirect('/users/settings');
//             }
//         });
//     } else {
//         req.flash('error', "Passwords don't match");
//         res.redirect('/users/settings');
//     }
// });


/* 
    Get reset password page
*/
// router.get('/reset-request' /* , ensureReset */ , function (req, res, next) {
//     res.render('pages/landing/resetRequest');
// });


/* 
    Reset Password Handle
*/
// router.post('/reset-request', (req, res) => {
//     // Get post params
//     const {
//         email
//     } = req.body;
//     // Attempt to locate user
//     User.findOne({
//             email: email
//         })
//         .then(user => {
//             // If no match, return with no user param
//             if (!user) {
//                 console.log('No user associated with email');
//                 req.flash('failure', 'No user associated with this email');
//                 res.redirect('/users/reset-request');
//             }
//             // Send email with reset instructions & notify user
//             else {
//                 req.flash('success', 'An email with instructions has been sent to the associated address');
//                 res.redirect('/users/reset-request');
//                 user.generatePasswordReset();
//                 console.log('Generated Password Token');
//                 // Save the updated user object
//                 user.save()
//                     .then(user => {
//                         // send email
//                         let link = "http://" + req.headers.host + "/users/reset/" + user.resetPasswordToken;
//                         const mailOptions = {
//                             to: user.email,
//                             from: {
//                                 "email": "CareAssistHelp@gmail.com"
//                             },
//                             subject: "CareAssist password reset",
//                             text: `Hi ${user.first_name},
//                                 Please click on the following link ${link} to reset your password. \n\n`,
//                         };

//                         sgMail.send(mailOptions, (error, result) => {
//                             if (error) {
//                                 console.log(error);
//                                 console.log(error.response.body);
//                             }
//                             console.log('Success. Email sent.');
//                         });
//                     })
//                     .catch(err => console.log(err));
//             }
//         })
//         .catch(err => console.log(err));
// });


/* 
    Get reset password page
    Using ensureReset middleware to verify token access to route/page
*/
// router.get('/reset/:token' /* , ensureReset */ , function (req, res, next) {
//     User.findOne({
//             resetPasswordToken: req.params.token,
//             resetPasswordExpires: {
//                 $gt: Date.now()
//             }
//         })
//         .then((user) => {
//             if (!user) {
//                 req.flash('error', 'Invalid Token.')
//                 res.redirect('/login');
//             }
//             res.render('pages/landing/reset', {
//                 user
//             });
//         })
//         .catch(err => res.status(500).json({
//             message: err.message
//         }));
// });


/* 
    Reset Password Handle
*/
// router.post('/reset', (req, res) => {
//     // Get post params
//     const {
//         new_password,
//         confirm_new_password,
//         token
//     } = req.body;
//     // Find user with valid token
//     User.findOne({
//             resetPasswordToken: token,
//             resetPasswordExpires: {
//                 $gt: Date.now()
//             }
//         })
//         .then((user) => {
//             // Invalid token
//             if (!user) {
//                 console.log('Invalid token');
//                 res.redirect('/login');
//             }
//             // Attempt password change
//             else {

//                 // Hash password and update
//                 bcrypt.genSalt(10, (err, salt) => {
//                     bcrypt.hash(new_password, salt, (err, hash) => {
//                         if (err) throw err;
//                         // Reassign user password
//                         const params = {
//                             "password": hash,
//                             "resetPasswordToken": undefined,
//                             "resetPasswordExpires": undefined
//                         };
//                         User.findOneAndUpdate({
//                                 "email": user.email
//                             }, {
//                                 $set: params
//                             },
//                             function (err) {
//                                 if (err) console.log(err);
//                             }
//                         );
//                     });
//                 });
//                 req.flash('success', 'Password successfully changed.');
//                 res.redirect('/login');

//             }
//         })
//         .catch(err => console.log(err));
// });


/* 
    Get user email update page
*/
// router.get('/updateEmail/:token' /* , ensureReset */ , function (req, res, next) {
//     User.findOne({
//             updateEmailToken: req.params.token,
//             updateEmailExpires: {
//                 $gt: Date.now()
//             }
//         })
//         .then((user) => {
//             if (!user) {
//                 console.log('Invalid token');
//                 res.redirect('/login');
//             } else {
//                 console.log('Valid token, updating user email');
//                 user.email = user.updateEmail;
//                 user.updateEmail = undefined;
//                 user.updateEmailToken = undefined;
//                 user.updateEmailExpires = undefined;
//                 user.save()
//                     .then()
//                     .catch(err => console.log(err));
//                 res.redirect('/login');
//             }

//         })
//         .catch(err => res.status(500).json({
//             message: err.message
//         }));
// });


/**  Require authentication for all the routes below */
// router.all('*',ensureAuthenticated);


/* 
    Delete specified user
*/
// router.delete('/delete/:id', (req, res) => {
//     User.findByIdAndRemove(req.params.id, (error, data) => {
//         if (error) {
//             console.log(error);
//         } else {
//             req.flash('success', 'User has been deleted.')
//             res.redirect('/users/settings')
//         }
//     });
// });

module.exports = router;