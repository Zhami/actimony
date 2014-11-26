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

function Node (nodeURI) {
	this._nodeURI		= nodeURI;
}
inherits(Node, EventEmitter);


//===========================
// Public Methods
//===========================


Node.prototype.execute = function (args, ctxt, opts) {

}



//===========================
// exports
//===========================

exports = module.exports = Node;
