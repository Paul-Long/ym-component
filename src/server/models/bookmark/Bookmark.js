import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookmarkSchema = new Schema({
  title: String,
  url: String,
  createTime: {type: Date, default: Date.now}
});
BookmarkSchema.index({_id: 1});

const Bookmark = mongoose.model('bookmark', BookmarkSchema);

export default Bookmark;