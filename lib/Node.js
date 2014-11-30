//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var EventEmitter	= require('events').EventEmitter;
var crypto			= require('crypto');
var	NodeClient		= require('./NodeClient.js');
var	NodeClientHandler = require('./NodeClientHandler.js');
var inherits		= require('util').inherits;

//======================================
// Public Interface
//======================================

function Node () {

	this._nodeID		= this._generateNodeID();
	this._transport		= void 0;
	this._msgHandler	= this._handleMessage.bind(this);
	this._openHandler	= this._handleOpen.bind(this);
	this._clientCnxnHandler	= this._handleClientConnection.bind(this);

}
inherits(Node, EventEmitter);

//===========================
// Private Methods
//===========================

Node.prototype._generateNodeID = function () {
	var shasum = crypto.createHash('sha1');
	var s = [
		process.pid
		, Math.random()
		, + new Date ()
	].join('/');

	shasum.update(s);

	return shasum.digest('hex');
};

// This is a Node which has accepted a client connection as a server
Node.prototype._handleClientConnection = function (nodeClientHandler) {
/*	var nodeClientHandler;

	function startHandshake () {
		nodeClientHandler.handshake();
	}
*/

console.log('Node:_handleClientConnection: server has a nodeClientHandler');
//	nodeClientHandler = new NodeClientHandler(connection);
//	process.nextTick(startHandshake.bind(this));
};

Node.prototype._handleMessage = function (rawMessage) {
	console.log('Received rawMessage:', rawMessage);
};

// This is a Node which has opened a client connection to another Node (as a server)
Node.prototype._handleOpen = function (nodeClient) {
	console.log('Node:_handleOpen: client has a nodeClient');

//	nodeClient = new NodeClient(connection);
};



//===========================
// Public Methods
//===========================

Node.prototype.addServer = function (Transport, transportOpts) {

	var transport	= new Transport('server', transportOpts, this._nodeID);

	//transport.on('nodeClientHandler', this._clientCnxnHandler);
};

Node.prototype.connectWith = function (Transport, transportOpts) {

	var transport	= new Transport('client', transportOpts, this._nodeID);

	//transport.on('nodeClient', this._openHandler);
};

Node.prototype.getNodeID = function () {
	return this._nodeID;
};



//===========================
// exports
//===========================

exports = module.exports = Node;
