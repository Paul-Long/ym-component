import mongoose from 'mongoose';
import config from '../config';

mongoose.connect(config.dbUrl, {config: {autoIndex: false}});

const db = mongoose.connection;

export default db;