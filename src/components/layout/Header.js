import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const {children, className = ''} = this.props;
    let headerCls = classNames('ym-layout-header', className);
    return (
      <div className={headerCls}>
        {children}
      </div>
    )
  }
}

Header.propTypes = {
  children: PropTypes.any
};
export default Header;
