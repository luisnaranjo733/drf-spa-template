var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config.dev')

console.log(config);

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchOptions: {
    poll: true,
    ignored: '/node_modules/'
  },
  hot: true,
  inline: true,
  headers: { "Access-Control-Allow-Origin": "*" },
  historyApiFallback: true
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err)
  }

  console.log(`Listening at ${config.output.publicPath}`);
})