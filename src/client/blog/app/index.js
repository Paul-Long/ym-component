import React from 'react';
import {Layout} from 'components';
import menus from './menus';
import BlogHeader from './BlogHeader';
import {route} from 'utils/RouteUtil';
import './blog.less';

class BlogApp extends React.Component {
  render() {
    return (
      <Layout className={this.props.prefixCls}>
        <BlogHeader />
        <Layout.Content>
          {route(menus, 'blog')}
        </Layout.Content>
      </Layout>
    )
  }
}
export default BlogApp;

BlogApp.defaultProps = {
  prefixCls: 'ym-blog'
};