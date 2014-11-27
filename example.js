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

var node1		= new Node();
console.log('node1: nodeID:', node1.getNodeID());
node1.addServer(TransportWS, {port: 8080});


var node2		= new Node();
console.log('node2: nodeID:', node2.getNodeID());
node2.connectWith(TransportWS, 'ws://localhost:8080');

