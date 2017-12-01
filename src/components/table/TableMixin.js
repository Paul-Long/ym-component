import React from 'react';

export function r_td({row, index, column}) {
  const {field, width = 100, align = 'center', render} = column;
  let style = {width, textAlign: align};
  const content = (typeof render === 'function') ? render(row, index, field) : row[field];
  const props = {
    key: field,
    className: `ym-table-filed-${field}`,
    style
  };
  if (field === '__table_select__') {
    return (
      <td {...props}>
        <input type="checkbox"/>
      </td>
    )
  }
  return (<td {...props}>{content}</td>);
}