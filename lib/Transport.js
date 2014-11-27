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

function Transport (type, transportOpts) {
	this._server		= void 0;
	this._client		= void 0;
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
