import React from 'react';
import {Dropdown, Icon, Menu, message} from 'antd';
import {get} from 'app@utils/fetch';
import Result from 'app@utils/Result';

class Account extends React.Component {
  h_click = ({key}) => {
    const {history} = this.props;
    if (key === 'logout') {
      get('/api/account/logout')
        .then(result => {
          Result.parse(result)
            .success(res => {
              (res.message) && message.success(res.message);
              (history) && history.push('/');
            });
        });
    }
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
    return (
      <Dropdown overlay={this.r_menu()}>
        <a>admin <Icon type="down" /></a>
      </Dropdown>
    )
  }
}

export default Account;
