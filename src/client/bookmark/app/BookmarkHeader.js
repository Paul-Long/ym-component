import React from 'react';
import Logo from 'app@components/logo';
import {Menu, Layout} from 'antd';
import {Link} from 'react-router-dom';

export default ((props) => {
  state = {
    path: '/bookmark'
  };
  return (
    <Layout.Header className='flex-row'>
      <Logo color='#f56a00' />
      <Menu mode='horizontal'>
        <Menu.Item key='/bookmark'><Link to='/bookmark'>书签</Link></Menu.Item>
        <Menu.Item key='/bookmark/group'><Link to='/bookmark/group'>书签组设置</Link></Menu.Item>
      </Menu>
    </Layout.Header>
  );
});