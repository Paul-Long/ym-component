import React from 'react';
import {Layout} from 'components';
import {Link} from 'react-router-dom';

class AppHeader extends React.Component {
  render() {
    return (
      <Layout.Header className='ym-app-header'>
        <div className='ym-app-logo'><Link to='/' replace>YM</Link></div>
      </Layout.Header>
    )
  }
}

export default AppHeader;
