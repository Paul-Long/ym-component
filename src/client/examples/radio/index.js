import React from 'react';
import {Radio} from 'components';

class DemoRadio extends React.Component {
  render() {
    return (
      <div className='ym-demo-radio'>
        <h1>Radio</h1>
        <Radio>1</Radio>
        <Radio>2</Radio>
        <Radio>3</Radio>
        <Radio>4</Radio>
      </div>
    )
  }
}

export default DemoRadio;
