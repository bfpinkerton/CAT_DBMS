/*
    Middleware file to authenticate if a user is logged WITHOUT readOnly credentials
    Using Passport's "isAuthenticated" to verify current user logged in
*/
module.exports = {
    ensureReadOnlyMCD: function(req, res, next) {
       if(req.isAuthenticated()) {
           if(req.user.readOnly == false) {
               return next();
           }
           req.flash('failure','Please contact an administrator to register a new account.');
           return res.redirect('/mcd/dashboard');

       }
       req.flash('failure','You need to log in first.');
       res.redirect('/login');
   }
}