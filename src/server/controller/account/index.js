import formidable from 'formidable';
import Result from '../../utils/Result';
import User from '../../models/user';

class AccountController {
  constructor() {
    this.login.bind(this);
    this.logout.bind(this);
  }

  async login(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      const user = await User.findOne({userName: fields.userName});
      if (user) {
        if (user.password !== fields.password) {
          return res.send(Result.error('登录密码错误'));
        } else {
          req.session.user = user.userName;
          return res.send(Result.success({userName: user.userName}, '登录成功'));
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

  async changePassword(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields) => {
      let user = await User.findOne({userName: fields.userName});
      if (user.password !== fields.originPass) {
        return res.send(Result.error('原密码输入错误'));
      }
      await User.update({_id: user._id, password: fields.newPass, updateTime: new Date()});
      return res.send(Result.success(null, '密码修改成功'));
    });
  }
}

export default new AccountController();