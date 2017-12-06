import React from 'react';
import classNames from 'classnames';
import RouteBase from 'routes/RouteBase';
import AppItem from './AppItem';
import {fetch} from 'app@utils/fetch';
import './style.less';

class Container extends RouteBase {
  componentDidMount() {
    fetch('/user/list', {method: 'GET'});
  }
  render() {
    const {prefixCls = ''} = this.props;
    const cls = classNames([prefixCls, 'flex-row']);
    return (
      <div className={cls}>
        <AppItem path='/examples' prefixCls={prefixCls} parent='examples' title='组件实例' />
        <AppItem path='/blog' prefixCls={prefixCls} parent='blog' title='博客' />
        <AppItem path='/bookmark' prefixCls={prefixCls} parent='bookmark' title='书签' />
        <AppItem path='/admin' prefixCls={prefixCls} parent='admin' title='后台管理'/>
      </div>
    )
  }
}

export default Container;
Container.defaultProps = {
  prefixCls: 'ym-container'
};
