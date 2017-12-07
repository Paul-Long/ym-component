import React from 'react';
import classNames from 'classnames';
import {Button, Form, Icon, Input} from 'antd';
import './style.less';

const FormItem = Form.Item;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const {prefixCls} = this.props;
    const cls = classNames(prefixCls, 'flex-center');
    return (
      <div className={cls} style={{width: '100%', height: '100%'}}>
        <Form style={{width: '400px'}}>
          <FormItem>
            <Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}} />} size='large' />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}} />} size='large'
                   type='password' />
          </FormItem>
          <FormItem>
            <Button size='large' type='primary' style={{width: '100%'}}>登录</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Login;

Login.defaultProps = {
  prefixCls: 'ym-login'
};
