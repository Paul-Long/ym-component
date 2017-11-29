import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Item from './Item';
import SubMenu from './SubMenu';
import './style';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventKey: null
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return Object.keys(nextProps).some(key => this.props[key] !== nextProps[key])
      || Object.keys(nextState).some(key => this.state[key] !== nextState[key]);
  }

  g_className = () => {
    const {className, theme, mode} = this.props;
    return classNames(['ym-menu', `ym-menu-${theme}`, `ym-menu-${mode}`, className]);
  };

  h_itemClick = (eventKey) => {
    console.log(eventKey);
    this.setState({eventKey});
  };

  r_children = () => {
    const {children, level = 0} = this.props;
    return React.Children.map(children, ele => {
      let eventKey = ele.key;
      return React.cloneElement(ele, {
        level: level,
        eventKey,
        onClick: this.h_itemClick
      });
    })
  };

  render() {
    const {style = {}} = this.props;
    let ulCls = this.g_className();
    return (
      <ul className={ulCls} style={style}>
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
Menu.defaultProps = {
  theme: 'light',
  mode: 'vertical'
};
Menu.Item = Item;
Menu.SubMenu = SubMenu;
export default Menu;
