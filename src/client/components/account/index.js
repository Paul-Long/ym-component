import React from 'react';
import {Button, Dropdown, Form, Icon, Input, Menu, message, Modal} from 'antd';
import {get, post} from 'app@utils/fetch';
import Result from 'app@utils/Result';
import Immutable from 'immutable';

const FormItem = Form.Item;

class Account extends React.Component {
  state = {
    visible: false,
    loading: false,
    pass: Immutable.fromJS({})
  };
  h_submit = () => {
    const pass = this.state.pass;
    if (!pass.get('originPass')) {
      return message.error('请填写原密码');
    }
    if (!pass.get('newPass')) {
      return message.error('请填写新密码');
    }
    if (!pass.get('confirmPass')) {
      return message.error('请填写二次确认密码');
    }
    if (pass.get('newPass') !== pass.get('confirmPass')) {
      return message.error('两次密码不一致');
    }
    this.setState({loading: true}, () => {
      post('/api/account/changePassword', {
        userName: window.sessionStorage.user,
        originPass: pass.get('originPass'),
        newPass: pass.get('newPass')
      }).then(res => {
        Result(res).success(res => message.success(res.message));
      });
    });
  };
  h_click = ({key}) => {
    const {history} = this.props;
    if (key === 'logout') {
      get('/api/account/logout')
        .then(result => {
          Result(result).success(res => {
              (res.message) && message.success(res.message);
              (history) && history.push('/');
            });
        });
    } else if (key === 'changePassword') {
      this.setState({visible: true});
    }
  };
  h_change = (data) => {
    let pass = this.state.pass.merge(Immutable.fromJS(data));
    this.setState({pass});
  };
  r_menu = () => {
    return (
      <Menu onClick={this.h_click}>
        <Menu.Item key='changePassword'>更改密码</Menu.Item>
        <Menu.Item key='logout'>登出</Menu.Item>
      </Menu>
    )
  };

  render() {
    const {visible, loading, pass} = this.state;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };
    return (
      <div>
        <Dropdown overlay={this.r_menu()}>
          <a style={{display: 'block', height: '100%'}}>{window.sessionStorage.user || ''} <Icon type='down' /></a>
        </Dropdown>
        <Modal
          visible={visible}
          title='修改密码'
          onOk={this.h_submit}
          width={400}
          onCancel={() => this.setState({visible: false, loading: false})}
          footer={[
            <Button key='submit' type='primary' loading={loading}
                    onClick={this.h_submit}>提交</Button>
          ]}
        >
          <Form>
            <FormItem {...formItemLayout} label='原密码'>
              <Input type='password' value={pass.get('originPass')}
                     onChange={e => this.h_change({originPass: e.target.value})} />
            </FormItem>
            <FormItem {...formItemLayout} label='新密码'>
              <Input type='password' value={pass.get('newPass')}
                     onChange={e => this.h_change({newPass: e.target.value})} />
            </FormItem>
            <FormItem {...formItemLayout} label='新密码确认'>
              <Input type='password' value={pass.get('confirmPass')}
                     onChange={e => this.h_change({confirmPass: e.target.value})} />
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Account;
