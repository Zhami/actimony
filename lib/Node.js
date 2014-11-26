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

var inherits		= require('util').inherits;

//======================================
// Public Interface
//======================================

function Node () {

	this._nodeID		= this._generateNodeID();
	this._transport		= void 0;
	this._msgHandler	= this._handleMessage.bind(this);
	this._openHandler	= this._handleOpen.bind(this);
	this._cnxnHandler	= this._handleConnection.bind(this);

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

Node.prototype._handleConnection = function (transport) {
	console.log('server has accepted a connection');
};

Node.prototype._handleMessage = function (message) {
	console.log('Received message:', message);
};

Node.prototype._handleOpen = function (transport) {
	console.log('client has opened a connection');
};



//===========================
// Public Methods
//===========================

Node.prototype.addServer = function (Transport, transportOpts) {

	var transport	= new Transport();

	transport.on('connection', this._cnxnHandler);

	transport.on('message', this._msgHandler);

	transport.createServer(transportOpts);
};

Node.prototype.connectWith = function (Transport, transportOpts) {
	var transport	= new Transport();

	transport.on('open', this._openHandler);

	transport.on('message', this._msgHandler);

	transport.createClient(transportOpts);
};

Node.prototype.getNodeID = function () {
	return this._nodeID;
};



//===========================
// exports
//===========================

exports = module.exports = Node;
