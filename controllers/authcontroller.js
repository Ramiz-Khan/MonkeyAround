var exports = module.exports = {}

var models = require("../models");
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}
exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.dashboard = function(req, res) {

	models.Games.findAll().then(function(done){
		var userGame;
		var otherGame;
		for (var i = 0; i < done.length; i++) {
			if (done[i].user_id == req.user.id){
				done[i].usergame = true;
			}
			else{
				done[i].usergame = false;
			}
		}
		var hbrsObject = {
			Games: done,
			userGame : userGame
		}
		console.log(hbrsObject);
	    res.render("dashboard", hbrsObject);
	})
 
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