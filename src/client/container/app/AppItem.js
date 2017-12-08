import React from 'react';
import {Link} from 'react-router-dom';

export default (({path, prefixCls, title}) => {
  return (
    <div className={`${prefixCls}-item ${prefixCls}-${path}`}>
      <Link to={`/${path}`} replace>{title}</Link>
    </div>
    )
});
