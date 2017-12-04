import React from 'react';
import classNames from 'classnames';

class Footer extends React.Component {
  render() {
    const {className, children, style = {}} = this.props;
    let divCls = classNames(['ym-layout-footer', className || '']);
    return (
      <div className={divCls} style={style}>
        {children}
      </div>
    )
  }
}

export default Footer;
