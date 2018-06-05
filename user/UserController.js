// UserController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('./User');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


// RETURNS 1 USER FROM THE DATABASE
router.get('/:id', function(req, res){

	User.findById(req.params.id, function(err, user){
		if(err){
			console.log(err);
			return res.status(500).send("There was a problem finding the user");
		} else if(!user) {
			return res.status(404).send("No user found.");
		} else {
			res.status(200).send(user);
		}
	});
});


// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function(req, res){

	User.find({}, function(err, users){
		if(err){
			console.log(err);
			return res.status(500).send("There was a problem finding the users.");
		} else {
			res.status(200).send(users);
		}

	});
});

// CREATE A NEW USER
router.post('/', function(req, res){

	User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	},
	function(err, user){
		if(err){
			console.log(err)
			return res.status(500).send("There was a problem adding the information to the database");
		} else {
			res.status(200).send(user);
			console.log(user);
		}
	});
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function(req, res){

	User.findByIdAndRemove(req.params.id, function(err, user){
		if(err){
			console.log(err);
			return res.status(500).send("There was a problem deleting the user.");
		} else {
			res.status(200).send("User " + user.name + " was deleted");
		}
	});
});

// UPDATE A SINGLE USER IN THE DATABASE
router.put('/:id', function(req, res){

	User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user){
		if(err){
			console.log(err);
			return res.status(500).send("There was a problem updating the user.");
		} else {
			res.status(200).send(user);
		}
	});
});

module.exports = router;
