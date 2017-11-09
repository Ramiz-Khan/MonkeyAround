
//dependencies
var express = require("express");
var sequelize = require("sequelize");
var bodyParser = require("body-parser");


//setup express app
var PORT = process.env.PORT || 8080;
var app = express();

//require db and models to sync
//var db = require("./models");

//Express handles body parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));


//routes - to be replaced by requiring route files
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



//sync sequelize then start express
//db.sequelize.sync().then(function() {    
    app.listen(PORT, function () {
        console.log("🌎  You're listening on port: " + PORT);
    });
//});
