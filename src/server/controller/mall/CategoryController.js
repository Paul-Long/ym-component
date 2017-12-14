import formidable from 'formidable';
import Category from '../../models/mall/Category';
import Result from '../../utils/Result';

class CategoryController {
  save = async (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      let category = Object.assign({}, fields, {
        updateTime: new Date(),
        createTime: new Date()
      });
      let c = await Category.find(fields);
      if (c.length > 0) {
        return res.send(Result.error('类目名称重复'));
      }
      const parent = await Category.findOne({_id: category.parent});
      if (!parent) {
        category.parent = 'root';
      }
      category = new Category(category);
      category = await category.save();
      res.send(Result.success(category));
    });
  };
  list = async (req, res, next) => {
    const categories = await Category.find({});
    const trees = await Category.aggregate().group({_id: '$parent'});
    console.log(trees);
    res.send(Result.success(categories));
  };
  getTree = (categories = []) => {
    return categories.map(c => {
      console.log()
    })
  }
}

export default new CategoryController();