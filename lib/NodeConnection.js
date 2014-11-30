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

function NodeConnection (entity) {
	this._entity		= entity;

	entity.on('message', function (message) {
//console.log('ws client received: %s', message);
		emitter('message', message);
	});
}
inherits(NodeConnection, EventEmitter);

//===========================
// Private Methods
//===========================



//===========================
// Public Methods
//===========================

NodeConnection.prototype.sendMessage = function (msg) {
	this._entity.send(msg);
};



//===========================
// exports
//===========================

exports = module.exports = NodeConnection;
