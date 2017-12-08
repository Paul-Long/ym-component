import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {Icon, Menu} from 'antd';
import menus from './menus';

const {SubMenu, Item} = Menu;

class AdminMenu extends React.Component {
  r_item = (children) => {
    return children.map(child => (<Item key={child.path}><Link to={`/admin${child.path}`}>{child.title}</Link></Item>));
  };

  r_title = (sub) => {
    if (sub.icon) {
      return <span><Icon type={sub.icon} /> {sub.title}</span>
    }
    return <span>{sub.title}</span>;
  };

  r_sub = () => {
    return menus.map((sub, i) => {
      const children = sub.children || {};
      return (
        <SubMenu key={i} title={this.r_title(sub)}>
          {this.r_item(children)}
        </SubMenu>
      )
    })
  };

  render() {
    const {prefixCls, className} = this.props;
    let cls = classNames(prefixCls, className || '');
    return (
      <Menu className={cls} mode='inline' defaultOpenKeys={['0']}>
        {this.r_sub()}
      </Menu>
    )
  }
}

export default AdminMenu;

AdminMenu.defaultProps = {
  prefixCls: 'ym-admin-menu'
};