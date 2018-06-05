// User.js

var mongoose = require('mongoose');

//Creating moongoose schema for Users
var UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String
});

// Binding schema to a model used to access the data in the database
mongoose.model('User', UserSchema);


// Exporting model to be used in other parts of program
module.exports = mongoose.model('User');