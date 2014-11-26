//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var os				= require('os');
var EventEmitter	= require('events').EventEmitter;
var inherits		= require('util').inherits;

var	Node			= require('./Node.js');

//======================================
// Public Interface
//======================================

function Actimony () {
	this._node	= this._createNode();
}
inherits(Actimony, EventEmitter);


//===========================
// Private Methods
//===========================

Actimony.prototype._createNode = function () {
	var node = new Node()
//	var interfaces = os.networkInterfaces();

	return node;
};

//===========================
// Public Methods
//===========================
Actimony.prototype.getNode = function () {
	return this._node;
};


//===========================
// exports
//===========================

exports = module.exports = Actimony;
