import React from 'react';
import {Menu} from 'components';
import {Link} from 'react-router-dom';

const {Item, SubMenu} = Menu;

class AppMenu extends React.Component {
  render() {
    return (
      <Menu>
        <Item><Link to='/button'>BUTTON</Link></Item>
        <Item><Link to='/menu'>MENU</Link></Item>
        <Item><Link to='/layout'>LAYOUT</Link></Item>
        <SubMenu title='菜单二'>
          <Item>菜单二-1</Item>
          <Item>菜单二-2</Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default AppMenu;