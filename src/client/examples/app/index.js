import React from 'react';
import {Layout} from 'components';
import AppMenu from './AppMenu';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import menus from './menus';
import {route} from 'utils/RouteUtil';
import './style.less';

class ExamplesApp extends React.Component {
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
                {route(menus, 'examples')}
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
  prefixCls: 'ym-examples'
};
