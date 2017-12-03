import React from 'react';
import Checkbox from '../checkbox';

class Radio extends React.Component {
  render() {
    return (<Checkbox {...this.props} />)
  }
}

export default Radio;
Radio.defaultProps = {
  prefixCls: 'ym-radio',
  type: 'radio'
};

