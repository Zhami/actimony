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

Node.prototype._handleClientConnection = function (connection) {
	var nodeClientHandler;

	function startHandshake () {
		nodeClientHandler.handshake();
	}

console.log('Node:_handleClientConnection...');
	nodeClientHandler = new NodeClientHandler(connection);
	process.nextTick(startHandshake.bind(this));
};

Node.prototype._handleMessage = function (rawMessage) {
	console.log('Received rawMessage:', rawMessage);
};

// This is a Node which has opened a connection to another Node (as a server)
Node.prototype._handleOpen = function (connection) {
	var nodeClient;
	console.log('Node:_handleOpen: client has opened a connection');

	nodeClient = new NodeClient(connection);
};



//===========================
// Public Methods
//===========================

Node.prototype.addServer = function (Transport, transportOpts) {

	var transport	= new Transport('server', transportOpts);

	transport.on('connection', this._clientCnxnHandler);
};

Node.prototype.connectWith = function (Transport, transportOpts) {
	var transport	= new Transport('client', transportOpts);

	transport.on('open', this._openHandler);

//	transport.on('message', this._msgHandler);
};

Node.prototype.getNodeID = function () {
	return this._nodeID;
};



//===========================
// exports
//===========================

exports = module.exports = Node;
