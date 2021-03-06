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
}
inherits(Actimony, EventEmitter);


//===========================
// Private Methods
//===========================


//===========================
// Public Methods
//===========================

Actimony.prototype.getNode = function () {
	return this._node;
};

Actimony.prototype.newNode = function (transport, transportOpts) {
	var node = new Node(transport, transportOpts);
//	var interfaces = os.networkInterfaces();

	return node;
};

//===========================
// exports
//===========================

exports = module.exports = Actimony;
