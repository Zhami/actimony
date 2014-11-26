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

function RouteTable (f) {
	this._routes	= [];
}


//===========================
// Public Methods
//===========================


RouteTable.prototype.addRoute = function (route) {
	this._routes.push(route);
}



//===========================
// exports
//===========================

exports = module.exports = RouteTable;
