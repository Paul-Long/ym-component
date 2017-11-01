import React from 'react';
import PropTypes from 'prop-types';

class Sider extends React.Component {
  static __YM_LAYOUT_SIDER = true;
  render() {
    const {children} = this.props;
    return (
      <div className='ym-layout-sider'>
        {children}
      </div>
    )
  }
}

Sider.propTypes = {
  children: PropTypes.any
};
export default Sider;
