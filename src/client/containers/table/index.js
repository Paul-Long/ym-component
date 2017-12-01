import React from 'react';
import {Table} from 'components';
import {columns, data} from './DemoData';

class DemoTable extends React.Component {
  render() {
    return (
      <div className='ym-demo-table'>
        <h1>Table</h1>
        <Table columns={columns} data={data} />
      </div>
    )
  }
}
export default DemoTable;
