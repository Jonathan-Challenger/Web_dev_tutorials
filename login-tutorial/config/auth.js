module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error', 'Please login to view this resource');
        res.redirect('/users/login');
    }
}