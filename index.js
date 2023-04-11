const express = require('express');
const { ExpressPeerServer } = require('peer');
const http = require('http');

const app = express();

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/'
});

app.use('/peerjs', peerServer);

server.listen(process.env.PORT || 10000);

/**
 * const peer = new Peer("someid", {
		host: "localhost",
		port: 9000,
		path: "/myapp",
	});
 */
