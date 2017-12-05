import React from 'react';

class Mask extends React.Component {
  render() {
    const {prefixCls} = this.props;
    return (
      <div className={prefixCls}>

      </div>
    )
  }
}

export default Mask;

Mask.defaultProps = {
  prefixCls: 'ym-mask'
};
