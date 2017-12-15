const config = {
  port: 3389,
  dbUri: 'mongodb://106.14.157.178:27017/houym',
  db: {
    user: 'root',
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
      maxAge: 60 * 60 * 1000,
    }
  }
};

export default config;
module.exports = config;
