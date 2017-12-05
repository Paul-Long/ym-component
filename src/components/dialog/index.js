import React from 'react';

class Dialog extends React.Component {
  render() {
    const {prefixCls} = this.props;
    return (
      <div className={prefixCls}>

      </div>
    )
  }
}

export default Dialog;

Dialog.defaultProps = {
  prefixCls: 'ym-dialog'
};
