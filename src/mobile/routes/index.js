import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Button} from 'antd-mobile';
import './style.less';

export default (() => (
  <BrowserRouter>
    <div>
      <h1>Mobile</h1>
      <Button>提交</Button>
    </div>
  </BrowserRouter>
));