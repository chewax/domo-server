(function () {

	'use strict';

	var Room = require('../models/room');

	/**
	 * Handles a call to /rooms and shows all the rooms for a user
	 */
	exports.getUserRooms = {  

	    cors: true,
	    handler: function (request, reply){

	    	var rooms = [];

			Room.find(function(err, results) {
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

	    cors: true,
	    handler: function (request, reply){

	    	var room = [];

			Room.find({
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

		cors: true,
	    handler: function (request, reply){
	    	var room = [];
			var interf = {};

			Room.find({
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

}).call(this);