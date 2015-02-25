(function () {
'use strict';

var Accounts	= require('../data/accounts');

exports.validateToken = function (decodedToken, callback) {

    var error,
        credentials = Accounts.accounts[decodedToken.id] || {};
    
    if (!credentials) {
        return callback(error, false, credentials);
    }

    return callback(error, true, credentials)
};


}).call(this);