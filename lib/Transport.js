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

//======================================
// Public Interface
//======================================

function Transport (type, transportOpts, nodeID) {
	this._nodeID		= nodeID
	this._type			= type;
	this._transportOpts	= transportOpts;
	this._emitter		= this.emit.bind(this);
}
inherits(Transport, EventEmitter);


//===========================
// Public Methods
//===========================



//===========================
// exports
//===========================

exports = module.exports = Transport;
