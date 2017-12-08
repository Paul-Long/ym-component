import formidable from 'formidable';
import Result from '../../utils/Result';
import User from '../../models/user';

class UserController {
  constructor() {
    this.login.bind(this);
    this.logout.bind(this);
    this.list.bind(this);
  }

  form = () => {
    return new formidable.IncomingForm();
  };

  async login(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      const user = await User.findOne({userName: fields.userName});
      if (user) {
        if (user.password !== fields.password) {
          return res.send(Result.error('登录密码错误'));
        } else {
          req.session.user = user.userName;
          return res.send(Result.success(null, '登录成功'));
        }
      } else {
        const error = Result.error('用户不存在');
        return res.send(Result.error('用户不存在'))
      }
    });
  }

  async logout(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async () => {
      delete req.session.user;
      res.send(Result.success(null, '登出成功'));
    });
  }

  async list(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      const users = await User.find({});
      res.send(Result.success(users));
    });
  }
}

export default new UserController();