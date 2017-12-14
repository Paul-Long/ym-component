import mongoose from 'mongoose';
import config from '../config';

mongoose.connect(config.dbUri, config.db);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open', () => {
  console.log('db connected success');
});

db.on('error', function (error) {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});

db.on('close', function () {
  console.log('db disconnect, try reconnect.');
  mongoose.connect(config.dbUri, config.db);
});


export default db;