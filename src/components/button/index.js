import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style';

class Button extends React.Component {
  render() {
    const {children, className, style = {}, type, size, onClick} = this.props;
    let btnCls = classNames([
      'ym-btn',
      `ym-btn-${type}`,
      `ym-btn-size-${size}`,
      className || ''
    ]);
    let btnStyle = Object.assign({}, style);
    return (
      <button className={btnCls}
              style={btnStyle}
              onClick={onClick}
      >{children}</button>
    )
  }
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(['default', 'primary', 'warning', 'info', 'danger']),
  size: PropTypes.oneOf(['default', 'small', 'large'])
};
Button.defaultProps = {
  type: 'default',
  size: 'default'
};
export default Button;
