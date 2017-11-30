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
          <Item key='3'><Link to='/layout' replace>LAYOUT</Link></Item>
          <Item key='4'><Link to='/icon' replace>ICON</Link></Item>
        </SubMenu>
        <SubMenu title='数据组件'>
          <Item key='5'>TABLE</Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default AppMenu;