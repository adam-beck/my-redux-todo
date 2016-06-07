'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: '0.0.0.0',
  port: '80'
});

server.route({
  method: 'GET',
  path: '/health',
  handler: (request, reply) => {
    reply({
      status: 'up'
    });
  }
});

server.start(err => {

  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
