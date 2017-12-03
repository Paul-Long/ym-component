import React from 'react';
import PropTypes from 'prop-types';
import {Layout} from 'components';
import AppMenu from './AppMenu';
import AppHeader from './AppHeader';
import './App.less';

class App extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <Layout className='ym-app'>
        <AppHeader/>
        <Layout>
          <Layout.Sider>
            <AppMenu />
          </Layout.Sider>
          <Layout.Content className='ym-app-content'>
            {children}
          </Layout.Content>
        </Layout>
        <Layout.Footer>
          footer
        </Layout.Footer>
      </Layout>
    )
  }
}

App.propTypes = {
  children: PropTypes.any
};

export default App;
