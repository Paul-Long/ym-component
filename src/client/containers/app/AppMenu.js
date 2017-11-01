import React from 'react';
import {Menu} from 'components';

const {Item, SubMenu} = Menu;

class AppMenu extends React.Component {
  render() {
    return (
      <Menu>
        <Item>菜单一</Item>
        <SubMenu title='菜单二'>
          <Item>菜单二-1</Item>
          <Item>菜单二-2</Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default AppMenu;