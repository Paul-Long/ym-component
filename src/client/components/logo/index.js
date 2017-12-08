import React from 'react';
import {Link} from 'react-router-dom';
import './Logo.less';

class Logo extends React.Component {
  render() {
    const {color} = this.props;
    return (
      <div className='ym-logo' style={{color}}><Link to='/ym' replace>YM</Link></div>
    )
  }
}
export default Logo;
Logo.defaultProps = {
  prefixCls: 'ym-logo',
  color: 'black'
};
