//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var inherits		= require('util').inherits;
var Transport		= require('./Transport.js');
var WebSocket		= require('ws');
var WebSocketServer	= WebSocket.Server
 
 //======================================
// Public Interface
//======================================

function TransportWS (type, transportOpts) {
	var	instantiator;

	if (!(this instanceof TransportWS)) {
		return new TransportWS();
	}

	Transport.call(this, type, transportOpts);

	if (type === 'server') {
		instantiator = this._instantiateServer.bind(this);
	} else if (type === 'client') {
		instantiator = this._instantiateClient.bind(this);
	}

	setImmediate(instantiator);
}
inherits(TransportWS, Transport);


//===========================
// Private Methods
//===========================

TransportWS.prototype._instantiateClient = function () {
	var emitter		= this._emitter;
	var client;
	var	self		= this;

//console.log('TransportWS:_instantiateClient:', 'transportOpts', this._transportOpts);

	client = new WebSocket(this._transportOpts);
	this._client = client;

	client.on('open', function () {
		emitter('open', self);
	});

	client.on('message', function (message) {
//console.log('ws client received: %s', message);
		emitter('message', message);
	});
};


TransportWS.prototype._instantiateServer = function (transportOpts) {
	var emitter = this._emitter;
	var server;
	var	self = this;
	
//console.log('TransportWS:_instantiateServer:', 'transportOpts', this._transportOpts);

	server = new WebSocketServer(this._transportOpts);
	this._server = server;

	server.on('connection', function (ws) {
		emitter('connection', self);
		ws.on('message', function (message) {
//console.log('ws server received: %s', message);
			emitter('message', message);
		});
	});
}

//===========================
// Public Methods
//===========================

TransportWS.prototype.sendMessage = function (message) {
	this._client.send(message);
};





//===========================
// exports
//===========================

exports = module.exports = TransportWS;
