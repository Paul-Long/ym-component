import formidable from 'formidable';
import Category from '../../models/mall/Category';
import Result from '../../utils/Result';
import * as _ from 'lodash';

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
    const group = _.groupBy(categories, 'parent');
    const trees = this.getTree(group['root'], group);
    res.send(Result.success(trees));
  };
  getTree = (categories = [], group = {}) => {
    return categories.map(c => {
      let children = group[c._id] || [];
      if (children.length > 0) {
        children = this.getTree(children, group);
      }
      return {
        value: c._id,
        key: c._id,
        label: c.name,
        children
      };
    })
  };
  delete = async (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      const ids = fields.ids || [];
      if (ids.length === 0) {
        return res.send(Result.error('请选择批量删除数据'));
      }
      await Category.remove({'_id': {$in: ids}});
      res.send(Result.success(null, '删除成功'));
    })
  }
}

export default new CategoryController();