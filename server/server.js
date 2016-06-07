'use strict';

const Hapi = require('hapi');
const plugins = require('./plugins');

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

server.register(plugins, () => {

  server.start(err => {

    if (err) {
      throw err;
    }

    server.log(`Server running at: ${server.info.uri}`);
  });
});
