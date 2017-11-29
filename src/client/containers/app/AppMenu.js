import React from 'react';
import {Menu} from 'components';
import {Link} from 'react-router-dom';

const {Item, SubMenu} = Menu;

class AppMenu extends React.Component {
  render() {
    return (
      <Menu theme='dark' className='ym-demo-app-menu'>
        <Item key='1'><Link to='/button' replace>BUTTON</Link></Item>
        <Item key='2'><Link to='/menu' replace>MENU</Link></Item>
        <Item key='3'><Link to='/layout' replace>LAYOUT</Link></Item>
        <SubMenu title='菜单二'>
          <Item key='4'>菜单二-1</Item>
          <Item key='5'>菜单二-2</Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default AppMenu;