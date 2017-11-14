var express = require('express');
var app = express();
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')
var path= require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', './views')
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session());

app.use(express.static(path.join(__dirname, '/public')));

//routes - to be replaced by requiring route files
app.get("/", function (req, res) {
    res.render("index");
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
 
 
//app.get('/', function(req, res) {
 
//    res.render("index");
 
//});

//Models
var models = require("./models");

var authRoute = require('./routes/auth.js')(app, passport);

require('./config/passport/passport.js')(passport, models.User);
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});
//setup express app
var PORT = process.env.PORT || 8080;



//sync sequelize then start express
models.sequelize.sync().then(function() {    
    app.listen(PORT, function () {
        console.log("🌎  You're listening on port: " + PORT);
    });
});
