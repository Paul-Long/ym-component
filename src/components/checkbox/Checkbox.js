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

  h_change = (e) => {
    const {onChange, disabled} = this.props;
    if (disabled) {
      return null;
    }
    this.setState({checked: !this.state.checked});
    if (typeof onChange === 'function') {
      onChange({
        target: {
          ...this.props,
          checked: e.target.checked,
        },
        stopPropagation() {
          e.stopPropagation();
        },
        preventDefault() {
          e.preventDefault();
        },
      });
    }
  };

  render() {
    const {className = '', prefixCls, disabled} = this.props;
    const {checked} = this.state;
    let checkboxCls = classNames(prefixCls, className, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled
    });
    return (
      <div className={checkboxCls}>
        <input type='checkbox'
               className={`${prefixCls}-input`}
               checked={!!checked}
               onChange={this.h_change}
        />
        <span className={`${prefixCls}-inner`}/>
      </div>
    )
  }
}

export default Checkbox;

Checkbox.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
Checkbox.defaultProps = {
  prefixCls: 'ym-checkbox',
  disabled: false
};
