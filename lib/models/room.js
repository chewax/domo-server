(function() {

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connect('mongodb://root:dani!R00t@ds039411.mongolab.com:39411/domo-mongo');
db.connection.on('error', function() {
    console.error('MongoDB connection error. Make sure MongoDB is running.');
});

var interfaceSchema = new Schema({
	id: {type:Number, unique:true},
	name: { type: String, unique: false },
	description: { type: String, unique: false },
	accessToken: { type: String, unique: false },
	devId: { type: String, unique: false }, //The device that publishes the action
	endPoint: { type: String, unique: false },
	pin: { type: String, unique: false },
	type: { type: String, unique: false }, //Types are D|A = Digital Analog
	published: { type: Boolean, default: false },
	isOn: { type: Boolean, default: false },
	message_on: { type: String, unique: false },
	message_off: { type: String, unique: false },
	value: { type: Boolean, default: false }
});

var roomSchema = new Schema({
	id: {type:Number, unique:true},
	name: { type: String, unique: false },
	description: { type: String, unique: false },
	enabled: { type: Boolean, default: false },
	interfaces: [interfaceSchema]
});

var Room = mongoose.model('Room', roomSchema);

module.exports = Room;

}).call(this);