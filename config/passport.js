/*
    PASSPORT CONFIG FILE
    This file deals directly with: 
        - Login Authorization
        - User Serialization: Establishing a session for authorized user to view privileged info
*/

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// DB & User Model
const db = require("../models");
const User = db.users;
const mysql = require("mysql");

// Login middleware
module.exports = function(passport) {
    passport.use('local',
        // Using email as "username"
        new localStrategy({ usernameField: 'email' }, (email, password, done) => {
            // Match email
            db.sequelize.query("select * from users where email = '"+email+"'", { type: db.sequelize.QueryTypes.SELECT})
                .then(user => {
                    // If no match, return with no user param
                    console.log(user);
                    if (user.length == 0) {
                        return done (null, false, { message: 'No account associated with email'});
                    }
                    // If user match, attempt to match password
                    // Compare hashed database password with non-hashed submitted password
                    bcrypt.compare(password, user[0].password, (err, isMatch) => {
                        if (err) throw err;
                        // If matching, return with user param
                        if (isMatch) {
                            // "user" param grants successful login
                            return done (null, user[0]);
                        }
                        else {
                            return done (null, false, { message: 'Password is incorrect'});
                        }
                    });

                })
                .catch(err => console.log(err));
        })
    );

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
		done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findByPk(id)
            .then(function(user) {
                done(null, user);
            })
            .catch(function(err) {
                if (err) {
                throw err;
            }
        });
    });

}



