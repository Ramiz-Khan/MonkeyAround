var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}
exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}

exports.viewgames = function(req, res) {
	res.render("viewgames");
}

exports.creategame = function(req, res) {
	res.render("creategame");
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}