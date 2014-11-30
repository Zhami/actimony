//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

//var inherits		= require('util').inherits;
//var Transport		= require('./Transport.js');
var TransportWSclient	= require('./TransportWSclient.js');
var TransportWSserver	= require('./TransportWSserver.js');


//======================================
// Public Interface
//======================================

function TransportWS (type, transportOpts, nodeID) {
	var	instantiator;

	if (!(this instanceof TransportWS)) {
		return new TransportWS();
	}

//	Transport.call(this, type, transportOpts);

	if (type === 'server') {
		return new TransportWSserver(transportOpts, nodeID);
	} else if (type === 'client') {
		return new TransportWSclient(transportOpts, nodeID);
	}
}


//===========================
// Private Methods
//===========================

TransportWS.prototype._instantiateClient = function () {
	var client;
	var transportWsClient;
	var emitter		= this._emitter;
	var	self		= this;

};


TransportWS.prototype._instantiateServer = function (transportOpts) {
	var connection;
	var emitter = this._emitter;
	var server;
	var	self = this;
	
//console.log('TransportWS:_instantiateServer:', 'transportOpts', this._transportOpts);

	server = new WebSocketServer(this._transportOpts);
	this._server = server;

	server.on('connection', function (ws) {


		connection = new NodeConnection(ws);
		//emitter('connection', connection);
	});
}

TransportWS.prototype._handshake = function (args, ctxt, opts) {
	var msg;

	msg = {
		name		: 'hello'
		, nodeID	: this._nodeID
	};

console.log('TransportWS:handshake...');

	this._connection.sendMessage(JSON.stringify(msg));

};

//===========================
// Public Methods
//===========================


TransportWS.prototype.sendMessage = function (msg) {
	this._entity.send(msg);
};


//===========================
// exports
//===========================

exports = module.exports = TransportWS;
