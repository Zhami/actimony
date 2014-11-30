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
var Transport		= require('./Transport.js');
var	NodeClientHandler = require('./NodeClientHandler.js');

var WebSocket		= require('ws');
var WebSocketServer	= WebSocket.Server
 


//======================================
// Helper: TransportWsClientConnection
//======================================
function TransportWsClientConnection (ws, nodeID) {
	this._nodeID	= nodeID;
	this._ws		= ws;
	this._state		= 'BEGIN';

	ws.on('message', this._handleClientMessage.bind(this));

	this._handshake();
}
inherits(TransportWsClientConnection, EventEmitter);

TransportWsClientConnection.prototype._handshake = function () {
	var msg;

	msg = {
		name		: 'hello'
		, nodeID	: this._nodeID
	};

console.log('TransportWsClientConnection:_handshake...');

	this._state	= 'HELLO';
	this._ws.send(JSON.stringify(msg));

};

TransportWsClientConnection.prototype._handleClientMessage = function (message) {

console.log('TransportWsClientConnection:_handleClientMessage:', 'message:', message);

};




//================================================================================

//======================================
// Public Interface
//======================================

function TransportWSserver (transportOpts, nodeID) {
	var	instantiator;

	if (!(this instanceof TransportWSserver)) {
		return new TransportWSserver();
	}

	Transport.call(this, 'server', transportOpts, nodeID);

	setImmediate(this._instantiateServer.bind(this));
}
inherits(TransportWSserver, Transport);


//===========================
// Private Methods
//===========================


TransportWSserver.prototype._instantiateServer = function (transportOpts) {
	var connection;
	var emitter 	= this._emitter;
	var nodeID		= this._nodeID;
	var server;
	var	self		= this;
	
//console.log('TransportWSserver:_instantiateServer:', 'transportOpts', this._transportOpts);

	server = new WebSocketServer(this._transportOpts);
	this._server = server;

	server.on('connection', function (ws) {

console.log('TransportWSserver:_instantiateServer:', 'have a connection...');

		connection = new TransportWsClientConnection(ws, nodeID);
		connection.on('connected', function () {});

		//connection = new NodeConnection(ws);
		//emitter('connection', connection);
	});
}

TransportWSserver.prototype._handshake = function (args, ctxt, opts) {
	var msg;

	msg = {
		name		: 'hello'
		, nodeID	: this._nodeID
	};

console.log('TransportWSserver:handshake...');

	this._connection.sendMessage(JSON.stringify(msg));

};

//===========================
// Public Methods
//===========================


TransportWSserver.prototype.sendMessage = function (msg) {
	this._entity.send(msg);
};


//===========================
// exports
//===========================

exports = module.exports = TransportWSserver;
