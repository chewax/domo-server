(function () {
	'use strict';

	var Room 	= require('../models/room');
	var Message = require('../models/message');
	var Setting = require('../models/setting');
	var Config	= require('../config');

	/**
	 * Handles a call to /rooms and shows all the rooms for a user
	 */
	exports.getUserRooms = {  
	    cors: Config.cors,
	    auth: Config.auth,
	    handler: function (request, reply){
	    	var rooms = [];

	    	//Get Authenticated user credentials
	    	var credentials = request.auth.credentials;

			Room.find({
				user_id: credentials.id
			},function(err, results) {
				if (err) {
					console.log("Error on fetching Rooms: " + err);
					reply(JSON.stringify(rooms));
				} else {
					rooms = results;
					reply(JSON.stringify(rooms));
				}
			});
	    }
	}

	/**
	 * Handles a call to /rooms/{room_id} and shows that room for the user
	 */
	exports.getRoomById = {  
	    cors: Config.cors,
	    auth: Config.auth,
	    handler: function (request, reply){
	    	var room = [];

	    	//Get Authenticated user credentials
	    	var credentials = request.auth.credentials;

			Room.find({
				user_id: credentials.id,
				id: request.params.room_id
			}, function(err, results) {
				if (err) {
					console.log("Error on fetching Rooms: " + err);
					reply(JSON.stringify(room));
				} else {
					room = results;
					reply(JSON.stringify(room));
				}
			});
	    }
	}

	/**
	 * Handles a call to /rooms/{room_id}/{if_id} and shows all the interfaces for a user room
	 */
	exports.getRoomInterfaceById = {  
		cors: Config.cors,
		auth: Config.auth,
	    handler: function (request, reply){
	    	var room = [];

	    	//Get Authenticated user credentials
	    	var credentials = request.auth.credentials;

			var interf = {};
			Room.find({
				user_id: credentials.id,
				id: request.params.room_id
			}, function(err, results) {
				if (err) {
					console.log("Error on fetching Rooms: " + err);
					reply(JSON.stringify(interf));
				} else {
					room = results[0];
					// Return interface that matches the id with the request
					for (var i = room.interfaces.length - 1; i >= 0; i--) {
						if (room.interfaces[i].id == request.params.if_id) {
							interf = room.interfaces[i];
						}
					}
					reply(JSON.stringify(interf));
				}
			});

	    }
	}


	exports.deleteMessage = {
		cors: Config.cors,
		auth: Config.auth,
		// cors: {origin: ['http://localhost:5000']},
		handler: function (request, reply) {
			//Get Authenticated user credentials
	    	var credentials = request.auth.credentials;

			Message.findOneAndRemove({
				user_id: credentials.id,
				_id: request.params.msg_id
			}, function(err) {
				if (err) {
					console.log("Error on fetching Messages: " + err);
					reply("Not OK");
				} else {
					console.log("OKKK");
					reply("OK");
				}
			});
		}
	}

	exports.getMessages = {
		cors: Config.cors,
		auth: Config.auth,
		handler: function (request, reply) {
			var msgs = [];

			//Get Authenticated user credentials
	    	var credentials = request.auth.credentials;

			Message.find({
				user_id: credentials.id
			}, function(err, results) {
				if (err) {
					console.log("Error on fetching Messages: " + err);
					reply(JSON.stringify(msgs));
				} else {
					msgs = results;
					reply(JSON.stringify(msgs));
				}
			});

		}
	}


}).call(this);