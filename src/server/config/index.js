const config = {
  port: 3389,
  dbUrl: 'mongodb://admin:123456@106.14.157.178:27017/ym-db',
  session: {
    name: 'SID',
    secret: 'SID',
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 365 * 24 * 60 * 60 * 1000,
    }
  }
};

export default config;
module.exports = config;
