import React from 'react';

class TableHeader extends React.Component {
  r_th = () => {
    const {columns = []} = this.props;
    return columns.map(col => {
      const {width = 100, align = 'center'} = col;
      let style = {
        width,
        textAlign: align
      };
      return (<th key={col.field} style={style}>{col.title}</th>)
    })
  };

  render() {
    return (
      <div className='ym-table-header'>
        <table cellPadding={0} cellSpacing={0} border={0}>
          <thead>
          <tr>
            {this.r_th()}
          </tr>
          </thead>
        </table>
      </div>
    )
  }
}

export default TableHeader;
