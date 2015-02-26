(function () {
'use strict';

var Accounts	= require('../data/accounts');
var Config		= require('../config');
var jwt			= require('jsonwebtoken');

exports.validateToken = function (decodedToken, callback) {

    var error,
        credentials = Accounts.accounts[decodedToken.id] || {};
    
    if (!credentials) {
        return callback(error, false, credentials);
    }

    return callback(error, true, credentials)
};

exports.signUser = {  

	    cors: Config.cors,
	    auth: false,
	    handler: function (request, reply){

	    	var reply_msg = "Username/Password incorrect";
	    	var username = request.query.username;
	    	var password = request.query.password;

	    	/*Get account matching username/password*/
	    	// ToDo - Change for DB Hit.
	    	for (var i in Accounts.accounts) {
	    		var acc = Accounts.accounts[i];

	    		if (acc.user == username){
	    			if (acc.pass == password){
		    			reply_msg = jwt.sign(Accounts.accounts[1], Config.private_key);
		 				console.log('token = '+reply_msg)
		    		}
	    		}
	    	}

	    	reply(reply_msg);
	 		

	    }
}

}).call(this);