import React from 'react';
import classNames from 'classnames';
import {Layout} from 'antd';
import Logo from 'app@components/logo';
import Account from 'app@components/account';
import AdminMenu from './AdminMenu';
import menus from './menus';
import './style.less';
import RouteBase from 'routes/RouteBase';

const {Content, Header, Sider} = Layout;

class Admin extends RouteBase {
  render() {
    const {prefixCls, history} = this.props;
    const cls = classNames(prefixCls);
    return (
      <Layout className={cls}>
        <Header className='flex-between'>
          <Logo color='#00a854' />
          <Account history={history} />
        </Header>
        <Layout>
          <Sider>
            <AdminMenu />
          </Sider>
          <Content>
            {this.route(menus)}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Admin;

Admin.defaultProps = {
  prefixCls: 'ym-admin',
  parent: 'admin'
};
