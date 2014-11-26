//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var	Actimony = require('./Lib/Actimony');

var actimony = new Actimony();

var node = actimony.getNode();

console.log('Node:nodeID:', node.getNodeID());

