/*
    Middleware file to authenticate if a user is logged WITH admin credentials
    Using Passport's "isAuthenticated" to verify current user logged in
*/
module.exports = {
    ensureAdminNoFlash: function(req, res, next) {
       if(req.isAuthenticated()) {
           if(req.user.admin) {
               return next();
           }
           return res.redirect('/users/home');

       }
       res.redirect('/login');
   }
}