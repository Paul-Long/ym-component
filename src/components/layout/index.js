import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';
import Footer from './Footer';
import './style';

class Layout extends React.Component {
  render() {
    const {className = '', children} = this.props;
    let hasSider = false;
    React.Children.forEach(children, (element) => {
      if (element && element.type && element.type.__YM_LAYOUT_SIDER) {
        hasSider = true;
      }
    });
    let cn = classNames(['ym-layout', className, (hasSider ? 'ym-layout-has-sider' : '')]);
    return (
      <div className={cn}>
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
Layout.Footer = Footer;

export default Layout;
