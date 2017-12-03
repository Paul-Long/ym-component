import React from 'react';

class Input extends React.Component {
  render() {
    const {type} = this.props;
    return (
      <input type={type}/>
    )
  }
}

export default Input;
Input.defaultProps = {
  prefixCls: 'ym-input',
  type: 'text'
};
