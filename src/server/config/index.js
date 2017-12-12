const config = {
  port: 3389,
  dbUri: 'mongodb://106.14.157.178:27017/ym-db',
  db: {
    user: 'admin',
    pass: '123456',
    server: {poolSize: 5, auto_reconnect:true},
    config: {autoIndex: false},
    useMongoClient: true

  },
  session: {
    name: 'SID',
    secret: 'SID',
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    }
  }
};

export default config;
module.exports = config;
