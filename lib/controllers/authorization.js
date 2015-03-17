(function () {
'use strict';

var User 			= require('../models/user');
var Config		= require('../config');
var jwt			= require('jsonwebtoken');

exports.validateToken = function (decodedToken, callback) {

    var error,
        credentials = decodedToken || {};
    
    if (!credentials) {
        return callback(error, false, credentials);
    }

    return callback(error, true, credentials);
};

exports.signUser = {  

	    cors: Config.cors,
	    auth: false,
	    handler: function (request, reply){
	    	var reply_obj = {status:"", msg:""};
	    	var username = request.query.params.username;
	    	var password = request.query.params.password;

	    	User.find({
				username: username,
				password: password
				}, function(err, user) {
					if (err) {
						console.log("Error Username/Password Incorrect - " + err);

						reply_obj.status = "Error";
	    			reply_obj.msg = "Username/Password Incorrect";	

	    			reply(reply_obj);	    	
					} else {

	    			reply_obj.status = "success";
	    			reply_obj.msg = jwt.sign(user[0], Config.private_key);

	    			reply(reply_obj);	    	

					}
				});
	    }
}

}).call(this);