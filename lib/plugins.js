(function () {
'use strict';

// ESTO VA EN EL JS EN QUE SE QUIERAN IMPORTAR LOS MODULOS
// Register all plugins within plugins.js
// if (Plugins.plugin_list.length) {
// 	for (var i = 0; i < Plugins.plugin_list.length; i++) {
// 	    var plugin = Plugins.plugin_list[i];
// 	    server.register(plugin.module, plugin.callback);
// 	}
// }


var Auth 		= require('./controllers/authorization');
var jwt			= require('jsonwebtoken');

var auth_scheme = function (error) {
	//register auth strategy
	server.auth.strategy('token', 'jwt', {
		key: privateKey,
    	validateFunc: Auth.validate
	});

}

exports.plugin_list = [
	// { module: require('somePlugin'), callback: function() {} },
	 { module: require('hapi-auth-jwt'), callback: auth_scheme}

];
    

}).call(this);