(function () {

'use strict';

//Load Modules
var Hapi 		= require('hapi');
var Routes 		= require('./routes');
var Auth 		= require('./controllers/authorization');
var jwt			= require('jsonwebtoken');
var Config		= require('./config');
var server 		= new Hapi.Server();


//Server connection settings
server.connection(Config.server);

// Register Auth method
server.register(require('hapi-auth-jwt'), function (error) {
	
	//Define strategy
	server.auth.strategy('token', 'jwt', {
		key: Config.private_key,
		validateFunc: Auth.validateToken
	});

	//Add routes -- inside Auth Register to be able to access auth method.
	server.route(Routes.endpoints);
});

// Start the server
server.start(function() {
    console.log('Server running at:', server.info.uri);
});

}).call(this);