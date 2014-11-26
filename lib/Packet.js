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

function Packet () {
	this.max_forwards		= 10;
	this.num_forwards		= 0;
}
inherits(Packet, EventEmitter);


//===========================
// Public Methods
//===========================


Packet.prototype.execute = function (args, ctxt, opts) {

}



//===========================
// exports
//===========================

exports = module.exports = Packet;
