var express = require("express");
var router = express.Router();

var Games = require("../models/games.js");

router.post("/creategame", function(req,res){
	Games.create([
			"user_id", "sport", "creator", "city", "description", "currentplayers", "totalplayers"
		], [
			req.user.id, req.body.sport, req.body.creator, req.body.city, req.body.description, req.body.currentplayers, req.body.totalplayers
		], function(result){
			console.log(result);
		});
})