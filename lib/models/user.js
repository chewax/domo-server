(function () {
	
	'use strict';
	var Mongoose = require('../database').Mongoose;

	//create the schema
	var userSchema = new Mongoose.Schema({
	    email:     {    type: String,   required: true },
	    password:  {    type: String,   required: true },
	    creationDate: { type: Date,     required: true, default: Date.now },
	});
	
	//create the model
	var User = Mongoose.model('User', userSchema);

	module.exports = User; 

}).call(this);