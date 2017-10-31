import React from 'react';
import {Layout} from 'components';

class App extends React.Component {
  render() {
    return (
      <Layout className='ym-app'>
        <Layout.Header>
          header
        </Layout.Header>
        <Layout.Content>
          content
        </Layout.Content>
      </Layout>
    )
  }
}

export default App;
