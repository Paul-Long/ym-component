import React from 'react';

class TableBody extends React.Component {
  r_tr = (row) => {
    const {columns = []} = this.props;
    return columns.map(col => {
      const {field, width = 100, align = 'center'} = col;
      let style = {width, textAlign: align};
      let fieldCls = `ym-table-filed-${field}`;
      return (
        <td key={col.field}
            className={fieldCls}
            data-field={field}
            style={style}
        >{row[col.field]}</td>
      )
    });
  };
  r_data = () => {
    const {data = []} = this.props;
    return data.map((row, i) => (<tr key={i}>{this.r_tr(row)}</tr>))
  };

  render() {
    return (
      <div className='ym-table-body'>
        <table cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
          {this.r_data()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableBody;
