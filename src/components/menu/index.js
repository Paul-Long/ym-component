import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Item from './Item';
import SubMenu from './SubMenu';
import {renderChild} from './MenuMixin';
import './style';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: null
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return Object.keys(nextProps).some(key => this.props[key] !== nextProps[key])
      || Object.keys(nextState).some(key => this.state[key] !== nextState[key]);
  }

  g_className = () => {
    const {className, theme, mode, prefixCls} = this.props;
    return classNames([prefixCls, `${prefixCls}-${theme}`, `${prefixCls}-${mode}`, className || '']);
  };

  h_itemClick = (eventKey) => {
    this.setState({activeKey: eventKey});
  };

  r_children = () => {
    const {children} = this.props;
    return React.Children.map(children, (ele, i, subIndex) => renderChild.call(this, ele, i, subIndex));
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
  prefixCls: PropTypes.string,
  selectedKeys: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
};
Menu.defaultProps = {
  theme: 'light',
  mode: 'vertical',
  prefixCls: 'ym-menu'
};
Menu.Item = Item;
Menu.SubMenu = SubMenu;
export default Menu;
