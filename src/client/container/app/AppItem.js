import React from 'react';
import {Link} from 'react-router-dom';

export default (({path, prefixCls, parent, title}) => {
  return (
    <div className={`${prefixCls}-item ${prefixCls}-${parent}`}>
      <Link to={path} replace>{title}</Link>
    </div>
    )
});
