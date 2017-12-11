import React from 'react';
import {Icon, Input, message} from 'antd';
import {put} from 'app@utils/fetch';
import Result from 'app@utils/Result';

class EditTableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  };
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({value});
  };
  check = () => {
    const self = this;
    const {data = {}, onChange} = this.props;
    put('/api/user', {userName: this.state.value, _id: data._id})
      .then(result => {
        Result.parse(result)
          .success(result => {
            (result.message) && message.success(result.message);
            self.setState({editable: false});
            (typeof onChange === 'function') && onChange(result);
          });
      });
  };
  edit = () => {
    this.setState({editable: true});
  };
  render() {
    const {value, editable} = this.state;
    return (
      <div className='flex-row'>
        {
          editable ?
            <div className='flex-between' style={{width: '100%'}}>
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              <Icon
                type='check'
                onClick={this.check}
              />
            </div>
            :
            <div className='flex-between' style={{width: '100%'}}>
              <span>{value || ' '}</span>
              <Icon
                type='edit'
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}
export default EditTableCell;
