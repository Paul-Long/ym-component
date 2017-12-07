import formidable from 'formidable';
import Result from '../../utils/Result';

class UserController {
  constructor() {
    this.login.bind(this);
  }

  async login(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      req.status = 200;
      res.send(Result.success(null, '登录成功'));
    });
  }
}

export default new UserController();