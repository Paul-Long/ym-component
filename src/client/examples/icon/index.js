import React from 'react';
import {Icon} from 'components';
import './style.less';

class DemoIcon extends React.Component {
  render() {
    return (
      <div className='ym-demo-icon'>
        <h1>ICON</h1>
        <Icon type='plus' />
        <Icon type='minus' />
        <Icon type='caret-up' />
        <Icon type='caret-down' />
      </div>
    );
  }
}

export default DemoIcon;
