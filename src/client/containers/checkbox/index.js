import React from 'react';
import {Checkbox} from 'components';

class DemoCheckbox extends React.Component {
  render() {
    return (
      <div className='ym-demo-checkbox'>
        <h1>Checkbox</h1>
        <Checkbox checked disabled={true}>中华好面点</Checkbox>
      </div>
    )
  }
}

export default DemoCheckbox;
