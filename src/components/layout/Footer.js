import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Footer extends React.Component {
  render() {
    const {className, children} = this.props;
    let divCls = classNames(['ym-layout-footer', className || '']);
    return (
      <div className={divCls}>
        {children}
      </div>
    )
  }
}

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};
export default Footer;
