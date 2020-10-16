/*
    Middleware file to authenticate if a user is logged WITH admin credentials
    Using Passport's "isAuthenticated" to verify current user logged in
*/
module.exports = {
     ensureAdmin: function(req, res, next) {
        if(req.isAuthenticated()) {
            if(req.user.admin) {
                return next();
            }
            req.flash('failure','Please contact an administrator to register a new account.');
            return res.redirect('/users/dashboard');

        }
        req.flash('failure','You need to log in first.');
        res.redirect('/login');
    }
}