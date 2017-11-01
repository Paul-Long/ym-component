import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Item extends React.Component {
  g_style = () => {
    const {style, level} = this.props;
    let cusStyle = {};
    cusStyle.paddingLeft = `${level * 24}px`;
    return Object.assign({}, style, cusStyle);
  };

  render() {
    const {className, children} = this.props;
    let liCls = classNames(['ym-menu-item', className || '']);
    return (
      <li className={liCls} style={this.g_style()}>
        {children}
      </li>
    )
  }
}

Item.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  level: PropTypes.number
};
export default Item;
