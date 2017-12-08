import React from 'react';
import classNames from 'classnames';
import AppItem from './AppItem';
import RouteBase from 'routes/RouteBase';
import './style.less';

class YmApp extends RouteBase {
  render() {
    const {prefixCls = ''} = this.props;
    const cls = classNames([prefixCls, 'flex-row']);
    return (
      <div className={cls}>
        <AppItem path='examples' prefixCls={prefixCls} title='组件实例' />
        <AppItem path='blog' prefixCls={prefixCls} title='博客' />
        <AppItem path='bookmark' prefixCls={prefixCls} title='书签' />
        <AppItem path='admin' prefixCls={prefixCls} title='后台管理' />
      </div>
    )
  }
}

export default YmApp;
YmApp.defaultProps = {
  prefixCls: 'ym-app'
};
