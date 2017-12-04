import React from 'react';
import {Menu} from 'components';
import {Link} from 'react-router-dom';
import menus from './menus';

const {Item, SubMenu} = Menu;

class AppMenu extends React.Component {
  r_item = ({path, title}) => {
    return (<Item key={path}><Link to={`${this.props.parent}${path}`} replace>{title}</Link></Item>)
  };
  r_menu = () => {
    return (menus || []).map(menu => {
      if ('path' in menu) {
        return this.r_item(menu);
      } else {
        let children = menu.children || [];
        children = children.map(this.r_item);
        return <SubMenu key={`${menu.title}`} title={menu.title}>{children}</SubMenu>
      }
    })
  };
  render() {
    return (
      <Menu theme='dark' className='ym-demo-app-menu'>
        {this.r_menu()}
      </Menu>
    )
  }
}

export default AppMenu;
AppMenu.defaultProps = {
  parent: '/examples'
};