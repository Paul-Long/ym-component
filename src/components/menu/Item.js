import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Item extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  g_style = () => {
    const {style, level} = this.props;
    let cusStyle = {};
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
    const {className, children} = this.props;
    let liCls = classNames(['ym-menu-item', className || '']);
    return (
      <li className={liCls} style={this.g_style()} onClick={this.h_click}>
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
