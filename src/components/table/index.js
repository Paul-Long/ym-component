import React from 'react';
import BaseProps from './BaseProps';
import Table from './Table';
import './style';

class TableBox extends BaseProps {
  render() {
    const {...props} = this.props;
    return (
      <div className='ym-table-box'>
        <Table {...props} />
      </div>
    )
  }
}
export default TableBox;
