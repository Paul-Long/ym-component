import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  render() {
    const {className = '', prefixCls, disabled} = this.props;
    const {checked} = this.state;
    let checkboxCls = classNames(prefixCls, className, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled
    });
    return (
      <div className={checkboxCls}>

      </div>
    )
  }
}

export default Checkbox;

Checkbox.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool
};
Checkbox.defaultProps = {
  prefixCls: 'ym-checkbox',
  disabled: false
};
