var express = require("express");
var sequelize = require("sequelize");
var fs = require("fs");

var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;
//var db = require("./models");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", function (req, res) {
    console.log("landingpage");
});

app.get("/login", function (req, res) {
    console.log("login");
});

app.get("/home", function (req, res) {
    console.log("home");
});

app.get("/api/home", function (req, res) {
    console.log("API home");
});

app.get("/api/user", function (req, res) {
    res.json();
});

app.get("/api/user/:id", function (req, res) {
    res.json();
});


//db.sequelize.sync().then(function() {    
    app.listen(PORT, function () {
        console.log("🌎  You're listening on port: " + PORT);
    });
//});
