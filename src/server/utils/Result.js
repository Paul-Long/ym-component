class Result {
  constructor() {
    this.result = {};
    this.success.bind(this);
    this.error.bind(this);
  }

  success(data, message = '操作成功') {
    this.result.status = 200;
    this.result.content = data || {};
    this.result.message = message;
    return this.result;
  }

  error(message = '操作失败') {
    this.result.status = 400;
    this.result.content = null;
    this.result.message = message;
  }
}

export default new Result();