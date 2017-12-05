import React from 'react';
import {Link} from 'react-router-dom';
import './Logo.less';

class Logo extends React.Component {
  render() {
    return (
      <div className='ym-logo'><Link to='/' replace>YM</Link></div>
    )
  }
}
export default Logo;
Logo.defaultProps = {
  prefixCls: 'ym-logo'
};
