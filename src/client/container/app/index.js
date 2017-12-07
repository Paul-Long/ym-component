import React from 'react';
import classNames from 'classnames';
import AppItem from './AppItem';
import RouteBase from 'routes/RouteBase';
import {fetch} from 'app@utils/fetch';
import './style.less';

class YmApp extends RouteBase {
  componentDidMount() {
    fetch('/birds/about', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      console.log(response);
    });
  }

  render() {
    const {prefixCls = ''} = this.props;
    const cls = classNames([prefixCls, 'flex-row']);
    return (
      <div className={cls}>
        <AppItem path='/examples' prefixCls={prefixCls} parent='examples' title='组件实例' />
        <AppItem path='/blog' prefixCls={prefixCls} parent='blog' title='博客' />
        <AppItem path='/bookmark' prefixCls={prefixCls} parent='bookmark' title='书签' />
        <AppItem path='/admin' prefixCls={prefixCls} parent='admin' title='后台管理' />
      </div>
    )
  }
}

export default YmApp;
YmApp.defaultProps = {
  prefixCls: 'ym-app'
};
