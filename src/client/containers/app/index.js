import React from 'react';
import PropTypes from 'prop-types';
import {Layout} from 'components';
import AppMenu from './AppMenu';
import './App.less';

class App extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <Layout className='ym-app'>
        <Layout.Header>
          header
        </Layout.Header>
        <Layout>
          <Layout.Sider>
            <AppMenu />
          </Layout.Sider>
          <Layout.Content>
            content
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
