import React from 'react';
import classNames from 'classnames';
import './style';

export default (props) => {
  const {style = {}} = props;
  let iCls = classNames(['iconfont', props.className || '', `icon-${props.type}`]);
  return (<i className={iCls} style={style} />)
}
