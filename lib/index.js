(function () {

'use strict';

//Load Modules
var Hapi = require('hapi');
var Routes = require('./routes'); 

// Create a server with a host and port
var server = new Hapi.Server();

server.connection({
	port: (process.env.PORT || 5000),
	routes: {cors: true},
});

server.route(Routes.endpoints);

// Start the server
server.start(function() {  
    console.log('Server running at:', server.info.uri);
});

}).call(this);