import React from 'react';
import {message} from 'antd';

class Result {
  constructor() {
    this.result = null;
    this.showErr = true;
    this.parse.bind(this);
    this.success.bind(this);
    this.error.bind(this);
  }

  parse(result = {}, showErr = true) {
    this.showErr = showErr;
    this.result = result;
    if (showErr && result.message && result.status === 400) {
      message.error(result.message);
    }
    return this;
  }

  success(callback) {
    const result = this.result;
    if (typeof callback === 'function' && result.status === 200) {
      callback(result);
    }
    return this;
  }

  error(callback) {
    const result = this.result;
    if (typeof callback === 'function' && result.status === 400) {
      callback(result);
    }
    return this;
  }
}

export default new Result();
