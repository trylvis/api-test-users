// db.js

var mongoose = require('mongoose');

//Connecting to database - saved in enviroment variable to prevent sharing password
mongoose.connect(process.env.dbApiTestUser);
