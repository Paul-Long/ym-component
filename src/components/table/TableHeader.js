import React from 'react';

class TableHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resizeField: null
    }
  }
  h_resize_click = (resizeField) => {
    this.setState({resizeField: resizeField});
    // let eles = document.getElementsByClassName(className);
    // for (let i = 0; i < eles.length; i++) {
    //   eles[i].style.width = '200px';
    // }
  };

  r_th = () => {
    const {columns = []} = this.props;
    return columns.map(col => {
      const {field, width = 100, align = 'center'} = col;
      let style = {
        width,
        textAlign: align
      };
      let title = col.title;
      if (typeof title === 'function') {
        title = title();
      }
      let fieldCls = `ym-table-filed-${field}`;
      return (
        <th key={col.field}
            data-field={fieldCls}
            className={className}
            style={style}
        >
          {title}
          <div className='ym-table-resize' onClick={this.h_resize_click.bind(this, fieldCls)} />
        </th>
      )
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
