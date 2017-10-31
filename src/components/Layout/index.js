import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';

class Layout extends React.Component {
  render() {
    const {className = '', children} = this.props;
    return (
      <div className={`ym-layout ${className}`}>
        {children}
      </div>
    )
  }
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

Layout.Header = Header;
Layout.Sider = Sider;
Layout.Content = Content;

export default Layout;
