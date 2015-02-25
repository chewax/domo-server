(function () {
	'use strict';

	module.exports = {

	    mongo: {
	        username: 'root',
	        password: 'dani!R00t',
	        url: 'ds039411.mongolab.com:39411',
	        database: 'domo-mongo'
	    },

	    private_key: 'BbZJjyoXAdr8BUZuiKKARWimKfrSmQ6fv8kZ7OFfc',

	    server: {
	    	port: (process.env.PORT || 5000),
	    	routes: {cors: true}
	    }
	}
	
}).call(this);