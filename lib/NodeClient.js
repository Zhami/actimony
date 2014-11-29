//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var EventEmitter	= require('events').EventEmitter;
var inherits		= require('util').inherits;


//======================================
// Public Interface
//======================================

function NodeClient (connection) {
	var	msgHandler		= this._handleMessage.bind(this);

	this._connection	= connection;

	connection.on('message', msgHandler);
}
inherits(NodeClient, EventEmitter);


//===========================
// Private Methods
//===========================

NodeClient.prototype._handleMessage = function (rawMessage) {
console.log('NodeClient:_handleMessage rawMessage:', rawMessage);

};

//===========================
// Public Methods
//===========================


NodeClient.prototype.execute = function (args, ctxt, opts) {

};



//===========================
// exports
//===========================

exports = module.exports = NodeClient;
