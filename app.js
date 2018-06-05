// app.js


var express = require('express');
var app = express();
var db = require('./db');

module.exports = app;

// Require usercontroller
var UserController = require('./user/UserController');
// Link usercontroller to /users
app.use('/users', UserController);