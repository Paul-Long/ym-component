import React from 'react';
import classNames from 'classnames';
import {renderChild} from './MenuMixin';
import Icon from '../icon';

class SubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: props.activeKey,
      opened: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeKey !== this.props.activeKey) {
      this.setState({activeKey: nextProps.activeKey});
    }
  }

  g_style = () => {
    const {style, level, mode} = this.props;
    let cusStyle = {};
    if (mode !== 'vertical') return cusStyle;
    cusStyle.paddingLeft = `${level * 12}px`;
    return Object.assign({}, style, cusStyle);
  };

  h_itemClick = (eventKey) => {
    const {onClick} = this.props;
    (typeof onClick === 'function') && onClick(eventKey);
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
    return React.Children.map(children, (ele, i, subIndex) => {
      return renderChild.call(this, ele, i, subIndex, {level: level + 1});
    })
  };

  render() {
    const {className, prefixCls} = this.props;
    const {opened} = this.state;
    let liCls = classNames(prefixCls, className || '', {
      [`${prefixCls}-opened`]: opened
    });
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

export default SubMenu;

SubMenu.defaultProps = {
  prefixCls: 'ym-menu-submenu'
};