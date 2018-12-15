var express = require("express");
var dotenv = require("dotenv").config();
// var keys = require("./keys.js");

var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var passport = require('passport');
var flash = require('connect-flash');

var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));
// require('./config/passport')(passport);


app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(session({
    secret: 'Iwouldntsayitssecret',
    resave: true,
    saveUninitialized: true
}));

app.set('views', __dirname + '/public');
app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require("./routes/locations.js")(app);

require('./routes/routes.js')(app, passport);




db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
