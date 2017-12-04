import React from 'react';
import {Layout} from 'components';

class AppHeader extends React.Component {
  render() {
    return (
      <Layout.Header className='ym-app-header'>
        <div className='ym-app-logo'>YM</div>
      </Layout.Header>
    )
  }
}

export default AppHeader;
