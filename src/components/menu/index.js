import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Item from './Item';
import SubMenu from './SubMenu';
import './style';

class Menu extends React.Component {
  r_children = () => {
    const {children, level = 0} = this.props;
    return React.Children.map(children, ele => {
      return React.cloneElement(ele, {
        level: level
      });
    })
  };

  render() {
    const {className} = this.props;
    let ulCls = classNames(['ym-menu', className || '']);
    return (
      <ul className={ulCls}>
        {this.r_children()}
      </ul>
    )
  }
}

Menu.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
  mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),
  selectedKeys: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
};
Menu.Item = Item;
Menu.SubMenu = SubMenu;
export default Menu;
