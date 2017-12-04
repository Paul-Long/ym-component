import React from 'react';
import {Layout} from 'components';
import AppMenu from './AppMenu';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import RouteBase from 'routes/RouteBase';
import menus from './menus';
import './App.less';

class App extends RouteBase {
  render() {
    console.log(this.route(menus));
    return (
      <Layout className='ym-app'>
        <AppHeader />
        <Layout>
          <Layout.Sider>
            <AppMenu />
          </Layout.Sider>
          <Layout.Content>
            <Layout>
              <Layout.Content className='ym-app-content'>
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

export default App;

App.defaultProps = {
  parent: 'examples'
};
