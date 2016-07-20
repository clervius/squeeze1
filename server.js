var express = require('express');
	mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session')

// Config vars
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var config = require('./server/config/config')[env];

//express setup
require('./server/config/express')(app, config);

// db setup
require('./server/config/mongoose')(config);
// routes
//require('./server/config/passport')(passport);
/*app.use(session({
	secret: "adventfinancialcorp",
	resave: true,
    saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session()); */

require('./server/config/routes')(app, passport);



//server
app.listen(config.port);
console.log('Advent is listening on port ' + config.port + '...');