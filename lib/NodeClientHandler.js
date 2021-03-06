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

function NodeClientHandler (connection) {
	var	msgHandler		= this._handleClientMessage.bind(this);

	this._connection = connection;

	connection.on('message', msgHandler);
}
inherits(NodeClientHandler, EventEmitter);


//===========================
// Private Methods
//===========================

NodeClientHandler.prototype._handleClientMessage = function (rawMessage) {
console.log('NodeClientHandler:_handleClientMessage rawMessage:', rawMessage);

};

//===========================
// Public Methods
//===========================

NodeClientHandler.prototype.handshake = function (args, ctxt, opts) {
	var msg;

	msg = {
		name		: 'hello'
		, nodeID	: this._nodeID
	};

console.log('NodeClientHandler:handshake...');

	this._connection.sendMessage(JSON.stringify(msg));

};




//===========================
// exports
//===========================

exports = module.exports = NodeClientHandler;
