(function () {

'use strict';

//Load Modules
var Hapi 		= require('hapi');
var Routes 		= require('./routes');
var Auth 		= require('./controllers/authorization');
var Accounts	= require('./data/accounts');
var jwt			= require('jsonwebtoken');
var Config		= require('./config');
var server 		= new Hapi.Server();


//Server connection settings
server.connection(Config.server);


// Use this token to build your request with the 'Authorization' header.  
// Authorization: Bearer <token>

var token = jwt.sign(Accounts.accounts[1], Config.private_key);
// use this token to build your web request.  You'll need to add it to the headers as 'authorization'.  And you will need to prefix it with 'Bearer '
console.log('token: ' + token);

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