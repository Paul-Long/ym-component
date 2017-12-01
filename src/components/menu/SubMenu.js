import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {renderChild} from './MenuMixin';
import Icon from '../icon';

class SubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: null,
      opened: true
    };
  }

  g_style = () => {
    const {style, level} = this.props;
    let cusStyle = {};
    cusStyle.paddingLeft = `${level * 12}px`;
    return Object.assign({}, style, cusStyle);
  };

  h_itemClick = (eventKey) => {
    this.setState({activeKey: eventKey});
  };

  r_title = () => {
    const {title} = this.props;
    const iconType = this.state.opened ? 'caret-up' : 'caret-down';
    return (
      <div className='ym-menu-submenu-title flex-between'
           style={this.g_style()}
           onClick={() => this.setState({opened: !this.state.opened})}
      >
        <div style={{paddingLeft: 5}}>{title}</div>
        <Icon type={iconType} />
      </div>
    )
  };

  r_children = () => {
    const {children, level} = this.props;
    return React.Children.map(children, (ele, i, subIndex) => renderChild.call(this, ele, i, subIndex, {level: level + 1}))
  };

  render() {
    const {className} = this.props;
    const {opened} = this.state;
    const prefixCls = 'ym-menu-submenu';
    let liCls = classNames([prefixCls, className || '', opened ? `${prefixCls}-opened` : '']);
    return (
      <li className={liCls}>
        {this.r_title()}
        <ul style={this.g_style()} className={`${prefixCls}-child`}>
          {this.r_children()}
        </ul>
      </li>
    )
  }
}

SubMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  title: PropTypes.any,
  level: PropTypes.number,
  style: PropTypes.object
};
export default SubMenu;
