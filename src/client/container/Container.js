import React from 'react';
import classNames from 'classnames';
import RouteBase from 'routes/RouteBase';
import {Link} from 'react-router-dom';
import './style.less';

class Container extends RouteBase {
  render() {
    const {prefixCls = ''} = this.props;
    const cls = classNames([prefixCls, 'flex-row']);
    return (
      <div className={cls}>
        <div className={`${prefixCls}-item ${prefixCls}-examples`}>
          <Link to='/examples' replace>组件实例</Link>
        </div>
        <div className={`${prefixCls}-item ${prefixCls}-blog`}>
          <Link to='/blog' replace>博客</Link>
        </div>
      </div>
    )
  }
}

export default Container;
Container.defaultProps = {
  prefixCls: 'ym-container'
};
