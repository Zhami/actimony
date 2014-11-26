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

function TransportWS () {
	if (!(this instanceof TransportWS)) {
		return new TransportWS();
	}

	Transport.call(this);
}
inherits(TransportWS, Transport);


//===========================
// Public Methods
//===========================

TransportWS.prototype.createClient = function (transportOpts) {
	var emitter = this._emitter;
	var client;
	var	self = this;

console.log('TransportWS:createClient:', 'transportOpts', transportOpts);
	client = new WebSocket(transportOpts);
	this._client = client;

	client.on('open', function () {
		emitter('open', self);
	});

	client.on('message', function (message) {
		console.log('ws client received: %s', message);
		emitter('message', message);
	});
};


TransportWS.prototype.createServer = function (transportOpts) {
	var emitter = this._emitter;
	var server;
	var	self = this;
	
	server = new WebSocketServer(transportOpts);

	this._server = server;

	server.on('connection', function (ws) {
		emitter('connection', self);
		ws.on('message', function (message) {
			console.log('ws server received: %s', message);
			emitter('message', message);
		});
	});

}



//===========================
// exports
//===========================

exports = module.exports = TransportWS;
