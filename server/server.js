'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: '0.0.0.0',
  port: '5005'
});


server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('works');
  }
});

server.route({
  method: 'GET',
  path: '/test',
  handler: (request, reply) => {
    reply('still works');
  }
});
server.start(err => {

  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
