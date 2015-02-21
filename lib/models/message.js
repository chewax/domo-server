(function () {

	'use strict';

	var mongoose = require('../database').Mongoose;

	//create the schema
	var messageSchema = new mongoose.Schema({
	    user_id: 		{type: Number, unique: true },
	    priority: 		{type: Number, unique: false },
	    title: 			{type: String, unique: false },
	    body: 			{type: String, unique: false },
	    creation_date: 	{type: Date, required: true, default: Date.now },
	    css_class: 		{type: String, unique: false },
	});
	
	//create the model
	var Message = mongoose.model('Message', messageSchema);

	module.exports = Message;

}).call(this);

// {
// user_id: 1,
// priority: 1,
// title: "HOLA",
// body: "HOLA QUE ASE",
// creation_date: "2015-02-02",
// css_class: ""
// }