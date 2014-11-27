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

function NodeClientHandler (transport, connection) {
	var	msgHandler		= this._handleClientMessage.bind(this);

	this._transport		= transport;

	transport.attachMessageHandler(msgHandler, connection);


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


NodeClientHandler.prototype.execute = function (args, ctxt, opts) {

};



//===========================
// exports
//===========================

exports = module.exports = NodeClientHandler;
