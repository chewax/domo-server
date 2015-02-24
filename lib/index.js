(function () {

'use strict';

//Load Modules
var Hapi 	= require('hapi');
var Routes 	= require('./routes');
var Plugins = require('./plugins.js');
var server 	= new Hapi.Server();



// Register all plugins within plugins.js
if (Plugins.plugins.length) {
	for (var i in Plugins) {
	    var plugin = Plugins[i];
	    server.register(plugin.module, plugin.callback);
	}
}

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