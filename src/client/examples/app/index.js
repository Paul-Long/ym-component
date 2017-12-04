import React from 'react';
import {Layout} from 'components';
import AppMenu from './AppMenu';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import './App.less';

class App extends React.Component {
  render() {
    const {children} = this.props;
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
                {children}
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
