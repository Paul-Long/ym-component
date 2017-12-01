import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import BaseProps from './BaseProps';

class Table extends BaseProps {
  render() {
    const {columns = [], data = []} = this.props;
    return (
      <div className='ym-table'>
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </div>
    )
  }
}
export default Table;
