(function () {

	'use strict';

		/**
	 * Handles a call to / and shows some text with links to login and registration
	 */
	exports.index = {  
	    handler: function (request, reply) {
	        var data =
	        '<h1> Hi there! </h1>' +
	        '<p> Would you like to <a href="login">login</a> or <a href="register">register</a>? </p>';

	        reply(data);
	    }
	}

	/**
	 * Handles a call to /login and shows a login form
	 */
	exports.login = {  
	    handler: function (request, reply) {

	        var form =
	        '<h1> Login </h1>' +
	        '<form method="post" action="login">' +
	        '   <p><input type="text"     name="email"    value="" placeholder="E-mail"></p>' +
	        '   <p><input type="password" name="password" value="" placeholder="Password"></p>' +
	        '   <p><input type="submit"   value="Login"></p>' +
	        '</form>';

	           reply(form);
	    }
	}

	/**
	 * Handles a call to /register and shows a registration form
	 */
	exports.register = {  
	    handler: function (request, reply) {

	        var form =
	        '<h1> Register </h1>' +
	        '<form method="post" action="register">' +
	        '   <p><input type="text"     name="email"    value="" placeholder="E-mail"></p>' +
	        '   <p><input type="password" name="password" value="" placeholder="Password"></p>' +
	        '   <p><input type="submit"   value="Login"></p>' +
	        '</form>';

	        reply(form);
	    }
	}

}).call(this);