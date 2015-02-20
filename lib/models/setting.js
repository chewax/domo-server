(function () {
	
	'use strict';
	var Mongoose = require('../database').Mongoose;

	//create the schema
	var settingSchema = new Mongoose.Schema({
	    name:     		{    type: String,   required: true },
	    description: 	{    type: String,   required: true },
	    value:  		{    type: String,   required: true },
	});
	
	//create the model
	var Setting = Mongoose.model('Setting', settingSchema);

	module.exports = Setting; 

}).call(this);