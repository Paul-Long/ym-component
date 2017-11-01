import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <div className='ym-layout-content'>
        {children}
      </div>
    )
  }
}

Content.propTypes = {
  children: PropTypes.any
};
export default Content;

