import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: String,
  password: String,
  phone: Number,
  createTime: Date,
  updateTime: {type: Date, default: Date.now},
  del: {type: Boolean, default: false}
});
UserSchema.index({_id: 1});

const User = mongoose.model('user', UserSchema);

export default User;
