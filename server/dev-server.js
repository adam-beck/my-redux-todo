const Server = require('hapi').Server;
const WebpackPlugin = require('hapi-webpack-plugin');
const path = require('path');

const server = new Server();
server.connection({
  host: '0.0.0.0',
  port: 5555
});

server.register([require('h2o2'), require('inert'), {
  register: WebpackPlugin,
  options: path.resolve(__dirname, '../webpack/webpack.config.js')
}], error => {
  if (error) {
    return console.error(error);
  }

  /**
   * For development, this sits in place of a production-ready server (i.e. nginx)
   * Normally, this re-route to the node server would take place in the nginx configuration
   * All requests that aren't prefixed with /api the index.html would be returned to help
   * with react-router
   */
  server.route({
    method: '*',
    path: '/api/{all*}',
    handler: {
      proxy: {
        mapUri: (request, callback) => {
          callback(null, `http://0.0.0.0:5005/${request.params.all || ''}`);
        }
      }
    }
  });

  server.route({
    method: '*',
    path: '/{all*}',
    handler: (request, reply) => {
      reply.file(path.resolve(__dirname, '..', 'index.html'));
    }
  });

  server.start(() => console.log(`Server running at: ${server.info.uri}`));
});
