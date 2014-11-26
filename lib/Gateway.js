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

function Gateway (f) {
	this._function		= f;
}
inherits(Gateway, EventEmitter);


//===========================
// Public Methods
//===========================


Gateway.prototype.execute = function (args, ctxt, opts) {

}



//===========================
// exports
//===========================

exports = module.exports = Gateway;
