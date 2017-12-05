import React from 'react';
import {Layout} from 'components';
import {Link} from 'react-router-dom';
import Logo from 'app@components/logo';

class AppHeader extends React.Component {
  render() {
    return (
      <Layout.Header className='ym-app-header'>
        <Logo />
      </Layout.Header>
    )
  }
}

export default AppHeader;
