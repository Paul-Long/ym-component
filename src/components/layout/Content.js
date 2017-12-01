import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Content extends React.Component {
  render() {
    const {children, className} = this.props;
    let contentCls = classNames(['ym-layout-content', className || '']);
    return (
      <div className={contentCls}>
        {children}
      </div>
    )
  }
}

Content.propTypes = {
  children: PropTypes.any
};
export default Content;

