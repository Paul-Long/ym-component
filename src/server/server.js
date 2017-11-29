const express = require('express');
const app = express();
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackHotMiddleWare = require('webpack-hot-middleware');
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleWare(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleWare(compiler));

app.use(express.static(webpackConfig.output.path));
app.get('*', (req, res) => {
  res.redirect('/');
});
const server = app.listen(3389, function () {
  const port = server.address().port;
  console.log("应用实例，访问地址为 http://localhost:%s", port)
});
