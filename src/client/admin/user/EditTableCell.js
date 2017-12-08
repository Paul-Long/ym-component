import React from 'react';
import {Icon, Input} from 'antd';

class EditTableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  };
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  };
  edit = () => {
    this.setState({ editable: true });
  };
  render() {
    const { value, editable } = this.state;
    return (
      <div className='flex-row'>
        {
          editable ?
            <div className='flex-between' style={{width: '100%', flexAlign: 'center'}}>
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              <Icon
                type='check'
                className='editable-cell-icon-check'
                onClick={this.check}
              />
            </div>
            :
            <div className='flex-between' style={{width: '100%', flexAlign: 'center'}}>
              <span>{value || ' '}</span>
              <Icon
                type='edit'
                className='editable-cell-icon'
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}
export default EditTableCell;
