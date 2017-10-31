import React from 'react';
import PropTypes from 'prop-types';
import {Layout} from 'components';

class App extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <Layout className='ym-app'>
        <Layout.Header>
          header
        </Layout.Header>
        <Layout.Content>
          {children}
        </Layout.Content>
      </Layout>
    )
  }
}

App.propTypes = {
  children: PropTypes.any
};

export default App;
