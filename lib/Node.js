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

//===========================
// Public Methods
//===========================


Node.prototype.getNodeID = function () {
	return this._nodeID;
};



//===========================
// exports
//===========================

exports = module.exports = Node;
