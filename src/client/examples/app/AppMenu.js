import React from 'react';
import {Menu} from 'components';
import {Link} from 'react-router-dom';

const {Item, SubMenu} = Menu;

class AppMenu extends React.Component {
  render() {
    return (
      <Menu theme='dark' className='ym-demo-app-menu'>
        <SubMenu title='基础组件'>
          <Item key='1'><Link to='/examples/button' replace>BUTTON</Link></Item>
          <Item key='2'><Link to='/examples/menu' replace>MENU</Link></Item>
          <Item key='3'><Link to='/examples/icon' replace>ICON</Link></Item>
        </SubMenu>
        <SubMenu title='数据组件'>
          <Item key='5'><Link to='/examples/checkbox' replace>CHECKBOX</Link></Item>
          <Item key='6'><Link to='/examples/radio' replace>RADIO</Link></Item>
          <Item key='7'><Link to='/examples/table' replace>TABLE</Link></Item>
          <Item key='8'><Link to='examples/input' replace>INPUT</Link></Item>
        </SubMenu>
        <SubMenu title='布局组件'>
          <Item key='9'><Link to='/examples/layout' replace>LAYOUT</Link></Item>
          <Item key='10'><Link to='/examples/iframe' replace>IFRAME</Link></Item>
          <Item key='11'><Link to='/blog/home' replace>Go Blog</Link></Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default AppMenu;