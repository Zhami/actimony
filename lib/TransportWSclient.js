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
var	NodeClient		= require('./NodeClient.js');

var WebSocket		= require('ws');
 

//======================================
// Public Interface
//======================================

function TransportWSclient (transportOpts, nodeID) {

	if (!(this instanceof TransportWSclient)) {
		return new TransportWSclient();
	}

	Transport.call(this, 'client', transportOpts, nodeID);

	this._state		= 'BEGIN';

	setImmediate(this._instantiateClient.bind(this));
}
inherits(TransportWSclient, Transport);


//===========================
// Private Methods
//===========================

TransportWSclient.prototype._instantiateClient = function () {
	var client;
	var transportWsClient;
	var emitter		= this._emitter;
	var nodeID		= this._nodeID;
	var	self		= this;

//console.log('TransportWSclient:_instantiateClient:', 'transportOpts', this._transportOpts);
//console.log('TransportWSclient:_instantiateClient:', 'nodeID', this._nodeID);

	client = new WebSocket(this._transportOpts);
	this._client = client;

	client.on('open', function () {
console.log('TransportWSclient:_instantiateClient:', 'connection is open');
		//emitter('open', connection);
	});

	client.on('message', function (message) {
		var m = JSON.parse(message);
		var msg;

console.log('TransportWSclient:_instantiateClient:', 'received message:', message);
		if (self._state === 'BEGIN') {
			if (m.name === 'hello') {

console.log('TransportWSclient:_instantiateClient:', 'rremote nodeID:', m.nodeID);

				self.remoteNodeID = m.nodeID;

				msg = {
					name		: 'hello'
					, nodeID	: nodeID
				};

				console.log('TransportWSclient:handshake...');

				client.send(JSON.stringify(msg));

			}
		}

		//emitter('message', message);
	});

};



TransportWSclient.prototype._handshake = function (args, ctxt, opts) {
	var msg;

	msg = {
		name		: 'hello'
		, nodeID	: this._nodeID
	};

console.log('TransportWSclient:handshake...');

	this._connection.sendMessage(JSON.stringify(msg));

};

//===========================
// Public Methods
//===========================


TransportWSclient.prototype.sendMessage = function (msg) {
	this._entity.send(msg);
};


//===========================
// exports
//===========================

exports = module.exports = TransportWSclient;
