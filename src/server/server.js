import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import config from './config';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import cookieParser from 'cookie-parser';
import db from './mongodb/db';
import route from './routes';
import render, {renderMobile} from './template/render';

const app = express();
const MongoStore = connectMongo(session);
const ENV = process.env.NODE_ENV;

app.use(cookieParser(config.session.secret, config.cookie));
app.use(session({
  name: config.session.name,
  secret: config.session.secret,
  cookie: {maxAge: config.session.maxAge},
  store: new MongoStore({mongooseConnection: db})
}));

if (ENV === 'develpoment') {
  const webpackDevMiddleWare = require('webpack-dev-middleware');
  const webpackHotMiddleWare = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleWare(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    serverSideRender: true,
    aggregateTimeout: 300,
    poll: true,
    stats: {
      chunks: false
    }
  }));
  app.use(webpackHotMiddleWare(compiler));
}
route(app);
app.use(express.static(webpackConfig.output.path));
app.use(function (req, res, next) {
  const url = req.originalUrl;
  console.log('Session user : ', req.session.user);
  if (url !== '/' && !req.session.user) {
    return res.redirect('/');
  }
  next();
});
app.get('/**', (req, res, next) => {
  const url = req.originalUrl;
  if (url.startsWith('/mobile')) {
    return res.send(renderMobile(req, res, next));
  }
  res.send(render(req, res, next));
});

const server = app.listen(config.port, function () {
  const port = server.address().port;
  console.log("应用实例，访问地址为 http://localhost:%s", port)
});
