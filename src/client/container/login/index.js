import React from 'react';
import classNames from 'classnames';
import {Button, Form, Icon, Input, message} from 'antd';
import Immutable from 'immutable';
import {post} from 'app@utils/fetch';
import Result from 'app@utils/Result';
import './style.less';

const FormItem = Form.Item;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: Immutable.fromJS({})
    };
  }
  h_submit = () => {
    const {user} = this.state;
    const history = this.props.history;
    if (!user.get('userName')) {
      return message.error('请填写用户名');
    }
    if (!user.get('password')) {
      return message.error('请输入密码');
    }
    post('/api/user/login', this.state.user.toJS())
      .then(result => {
        Result.parse(result)
          .success((result) => {
            (result.message) && message.success(result.message);
            history.push('/ym');
          })
          .error();
      });
  };
  h_change = (user) => {
    user = this.state.user.merge(Immutable.fromJS(user));
    this.setState({user});
  };

  render() {
    const {prefixCls} = this.props;
    const user = this.state.user;
    const cls = classNames(prefixCls, 'flex-center');
    return (
      <div className={cls}>
        <Form style={{width: '400px'}}>
          <FormItem>
            <Input prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}} />}
                   size='large'
                   value={user.get('userName')}
                   onChange={e => this.h_change({userName: e.target.value})}
            />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}} />} size='large'
                   type='password'
                   onChange={e => this.h_change({password: e.target.value})}
                   onPressEnter={this.h_submit}
            />
          </FormItem>
          <FormItem>
            <Button size='large'
                    type='primary'
                    style={{width: '100%'}}
                    onClick={this.h_submit}
            >登录</Button>
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
