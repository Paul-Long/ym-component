import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import config from './config';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import cookieParser from 'cookie-parser';
import db from './mongodb/db';
import route from './routes';

const app = express();
const MongoStore = connectMongo(session);
const ENV = process.env.NODE_ENV;

app.use(cookieParser(config.session.secret, config.cookie));
app.use(session({
  name: config.session.name,
  secret: config.session.secret,
  cookie: {maxAge: 365 * 24 * 60 * 60 * 1000},
  store: new MongoStore({mongooseConnection: db})
}));

if (ENV === 'develpoment') {
  const webpackDevMiddleWare = require('webpack-dev-middleware');
  const webpackHotMiddleWare = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleWare(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleWare(compiler));
}
route(app);
app.use(express.static(webpackConfig.output.path));
const server = app.listen(config.port, function () {
  const port = server.address().port;
  console.log("应用实例，访问地址为 http://localhost:%s", port)
});
