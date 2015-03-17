(function () {
	
	'use strict';
	var Mongoose = require('../database').Mongoose;

	//create the schema
	var userSchema = new Mongoose.Schema({
			id: 					{ type: Number, 	unique:true },
	    email:     		{ type: String,   required: false },
	    username: 		{	type: String,   required: true },
	    password:  		{	type: String,   required: true },
	    fullName:  		{ type: String,   required: true },
	    creationDate: {	type: Date,     required: true, default: Date.now },
	});
	
	//create the model
	var User = Mongoose.model('User', userSchema);

	module.exports = User; 

}).call(this);