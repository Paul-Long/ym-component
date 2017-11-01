import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <div className='ym-layout-header'>
        {children}
      </div>
    )
  }
}

Header.propTypes = {
  children: PropTypes.any
};
export default Header;
