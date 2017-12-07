import React from 'react';
import {Layout} from 'components';
import AppMenu from './AppMenu';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import RouteBase from 'routes/RouteBase';
import menus from './menus';
import './style.less';

class ExamplesApp extends RouteBase {
  render() {
    const {prefixCls} = this.props;
    return (
      <Layout className={prefixCls}>
        <AppHeader />
        <Layout>
          <Layout.Sider>
            <AppMenu />
          </Layout.Sider>
          <Layout.Content>
            <Layout>
              <Layout.Content className={`${prefixCls}-content`}>
                {this.route(menus)}
              </Layout.Content>
              <AppFooter />
            </Layout>
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
}

export default ExamplesApp;

ExamplesApp.defaultProps = {
  parent: 'examples',
  prefixCls: 'ym-examples'
};
