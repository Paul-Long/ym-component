import React from 'react';
import {r_td} from './TableMixin';

class TableBody extends React.Component {
  constructor(props) {
    super(props);
    this.hovered = null;
    this.clicked = null;
  }

  h_mouse_event = (event, index, dataIndexCls) => {
    let ele = document.getElementsByClassName(dataIndexCls);
    let clickCls = 'ym-table-tr-clicked';
    for (let i = 0; i < ele.length; i++) {
      let clicked = ele[i].getAttribute('class').indexOf(clickCls) > 0;
      let isHover = event === 'onMouseOver';
      if (event === 'onMouseOver' || event === 'onMouseOut') {
        !clicked && ele[i].setAttribute('class', `${dataIndexCls} ${isHover ? 'ym-table-tr-hover' : ''}`);
        this.hovered = isHover ? null : dataIndexCls;
      } else if (event === 'onClick') {
        if (this.clicked) {
          let clickedEle = document.getElementsByClassName(this.clicked);
          for (let j = 0; j < clickedEle.length; j++) {
            clickedEle[j].setAttribute('class', this.clicked);
          }
        }
        ele[i].setAttribute('class', `${dataIndexCls} ${clicked ? '' : clickCls}`);
        this.clicked = clicked ? null : dataIndexCls;
      }
    }
  };
  r_tr = (row = {}, index) => {
    const {columns = []} = this.props;
    return columns.map(column => r_td({row, index, column}));
  };
  r_data = () => {
    const {data = []} = this.props;
    return data.map((row, i) => {
      let className = `ym-table-tr-index-${i}`;
      const props = {
        key: i,
        className
      };
      ['onMouseOver', 'onMouseOut', 'onClick'].forEach(event => {
        props[event] = () => this.h_mouse_event(event, i, className);
      });
      props['data-index'] = i;
      return (<tr {...props}>{this.r_tr(row, i)}</tr>);
    })
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
