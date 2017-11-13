
//dependencies
var express = require("express");
var sequelize = require("sequelize");
var bodyParser = require("body-parser");
var path = require("path");


//setup express app
var PORT = process.env.PORT || 8080;
var app = express();

//require db and models to sync
var db = require("./models");

//Express handles body parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controller/gamesController.js");

app.use("/", routes);

//routes - to be replaced by requiring route files
app.get("/", function (req, res) {
    console.log("landingpage");
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get("/login", function (req, res) {
    console.log("login");
});

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
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
db.sequelize.sync().then(function() {    
    app.listen(PORT, function () {
        console.log("🌎  You're listening on port: " + PORT);
    });
});
