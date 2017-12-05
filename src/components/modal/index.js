import React from 'react';
import classNames from 'classnames';

class Modal extends React.Component {
  render() {
    const {prefixCls} = this.props;
    const cls = classNames(prefixCls);
    return (
      <div className={cls}>

      </div>
    )
  }
}

export default Modal;

Modal.defaultProps = {
  prefixCls: 'ym-modal'
};
