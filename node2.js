//==============================
// (c) 2014 Envisix Labs
//
// License: MIT
// Author: Stuart Malin
// stuart [at] envisixlabs [dot] com
//==============================

"use strict";

var	Actimony	= require('./Lib/Actimony.js');
var	Node		= require('./Lib/Node.js');
var TransportWS	= require('./lib/TransportWS.js');

var actimony	= new Actimony();

var node		= new Node();
console.log('node2: nodeID:', node.getNodeID());
node.connectWith(TransportWS, 'ws://localhost:8080');

