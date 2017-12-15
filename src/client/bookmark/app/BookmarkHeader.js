import React from 'react';
import Logo from 'app@components/logo';
import {Layout, Menu} from 'antd';
import {Link} from 'react-router-dom';

class BookmarkHeader extends React.Component {
  state = {
    key: '/bookmark'
  };

  render() {
    return (
      <Layout.Header className='flex-row'>
        <Logo color='#f56a00' />
        <Menu mode='horizontal' onClick={({key}) => this.setState({key})} selectedKeys={[this.state.key]}>
          <Menu.Item key='/bookmark'><Link to='/bookmark'>书签</Link></Menu.Item>
          <Menu.Item key='/bookmark/group'><Link to='/bookmark/group'>书签组设置</Link></Menu.Item>
        </Menu>
      </Layout.Header>
    )
  }
}

export default BookmarkHeader;
