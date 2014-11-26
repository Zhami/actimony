//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";


//======================================
// Public Interface
//======================================

function Route (nodeURI) {
	this._nodeURI			= nodeURI;
	this._distance			= 1;
	this._nextNode			= void 0;
	this._nextNodeLatency	= 0;
	this._nextNodeLoad		= 0;
}


//===========================
// Public Methods
//===========================


Route.prototype.execute = function (args, ctxt, opts) {

}



//===========================
// exports
//===========================

exports = module.exports = Route;
