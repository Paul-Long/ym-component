import React from 'react';
import classNames from 'classnames';

class Item extends React.Component {
  g_style = () => {
    const {style, level, mode} = this.props;
    let cusStyle = {};
    if (mode !== 'vertical') return cusStyle;
    cusStyle.paddingLeft = `${level * 24}px`;
    return Object.assign({}, style, cusStyle);
  };
  h_click = () => {
    const {onClick} = this.props;
    if (typeof onClick === 'function') {
      onClick(this.props.eventKey);
    }
  };

  render() {
    const {className, children, prefixCls, active} = this.props;
    let liCls = classNames(prefixCls, className, {
      [`${prefixCls}-active`]: active
    });
    return (
      <li className={liCls} style={this.g_style()} onClick={this.h_click}>
        {children}
      </li>
    )
  }
}

export default Item;

Item.defaultProps = {
  prefixCls: 'ym-menu-item',
  active: false
};
