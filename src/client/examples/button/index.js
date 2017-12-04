import React from 'react';
import {Button} from 'components';
import './style.less';

class DemoButton extends React.Component {
  render() {
    return (
      <div className='ym-demo-button'>
        <h1>Button</h1>
        <Button>button</Button>
        <Button size='large'>Large Button</Button>
        <Button type='primary'>Primary Button</Button>
        <Button type='danger'>Danger Button</Button>
      </div>
    )
  }
}

export default DemoButton;
