(function () {
'use strict';

var Pages = require('./controllers/pages');
var API = require('./controllers/api');

/**
 * Contains the list of all routes, i.e. methods, paths and the config functions
 * that take care of the actions
 */
exports.endpoints = [

    { method: 'GET',	path: '/', 								config: Pages.index    },
    { method: 'GET',	path: '/login', 						config: Pages.login    },
    { method: 'GET',	path: '/register', 						config: Pages.register },
    
    { method: 'GET',	path: '/rooms', 						config: API.getUserRooms },
    { method: 'GET',	path: '/rooms/{room_id}', 				config: API.getRoomById },
    { method: 'GET',	path: '/rooms/{room_id}/{if_id}', 		config: API.getRoomInterfaceById },

    { method: 'GET',	path: '/msgs', 							config: API.getMessages },
    { method: 'DELETE', path: '/msgs/{msg_id}',                 config: API.deleteMessage },

];


}).call(this);