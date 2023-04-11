const express = require('express');
const { ExpressPeerServer } = require('peer');
const http = require('http');

const app = express();

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  path: "/",
  debug: true,
});

app.use('/peerjs', peerServer);

server.listen(process.env.PORT || 443);

/**
 * const peer = new Peer("someid", {
		host: "localhost",
		port: 9000,
		path: "/myapp",
	});
 */
