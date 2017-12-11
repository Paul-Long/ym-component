import formidable from 'formidable';
import Result from '../../utils/Result';
import User from '../../models/user';

class UserController {
  constructor() {
    this.list.bind(this);
    this.update.bind(this);
    this.delete.bind(this);
    this.save.bind(this);
  }

  async list(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      const users = await User.find({});
      res.send(Result.success(users));
    });
  }

  async update(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      let user = Object.assign({}, fields, {updateTime: new Date()});
      await User.update(user);
      user = await User.findOne(fields);
      res.send(Result.success(user, '更新成功'));
    });
  }

  async delete(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      let user = Object.assign({}, fields, {updateTime: new Date(), del: true});
      await User.update(fields, user);
      user = await User.findOne(fields);
      res.send(Result.success(user, '删除成功'));
    });
  }

  async save(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      let user = new User(
        Object.assign({}, fields, {
          updateTime: new Date(),
          createTime: new Date(),
          del: false
        }));
      user = await user.save();
      console.log(user);
      res.send(Result.success(user, '保存成功'));
    });

  }
}

export default new UserController();