const express = require('express');
const { ExpressPeerServer } = require('peer');
const http = require('http');

const app = express();

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/',
  port: 443
});

app.use('/peerjs', peerServer);

server.listen(9000);

/**
 * const peer = new Peer("someid", {
		host: "localhost",
		port: 9000,
		path: "/myapp",
	});
 */
