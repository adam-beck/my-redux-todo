var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack/webpack.config');

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    '**': 'http://localhost:8080'
  }
});

server.listen(4040, '0.0.0.0', (err, result) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Listening at http://localhost:4040`);
});
