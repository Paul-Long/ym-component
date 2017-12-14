import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: String,
  parent: String,
  order: Number,
  createTime: Date,
  updateTime: {type: Date, default: Date.now}
});
CategorySchema.index({_id: 1});

const Category = mongoose.model('category', CategorySchema);

export default Category;