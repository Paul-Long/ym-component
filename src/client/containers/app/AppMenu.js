import React from 'react';
import {Menu} from 'components';
import {Link} from 'react-router-dom';

const {Item, SubMenu} = Menu;

class AppMenu extends React.Component {
  render() {
    return (
      <Menu theme='dark' className='ym-demo-app-menu'>
        <SubMenu title='基础组件'>
          <Item key='1'><Link to='/button' replace>BUTTON</Link></Item>
          <Item key='2'><Link to='/menu' replace>MENU</Link></Item>
          <Item key='3'><Link to='/icon' replace>ICON</Link></Item>
        </SubMenu>
        <SubMenu title='数据组件'>
          <Item key='5'><Link to='/checkbox' replace>CHECKBOX</Link></Item>
          <Item key='6'><Link to='/table' replace>TABLE</Link></Item>
        </SubMenu>
        <SubMenu title='布局组件'>
          <Item key='7'><Link to='/layout' replace>LAYOUT</Link></Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default AppMenu;