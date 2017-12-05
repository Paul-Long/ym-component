import React from 'react';
import {Layout} from 'components';
import RouteBase from 'routes/RouteBase';
import menus from './menus';
import BlogHeader from './BlogHeader';
import './blog.less';

class BlogApp extends RouteBase {
  render() {
    return (
      <Layout className={this.props.prefixCls}>
        <BlogHeader />
        <Layout.Content>
          {this.route(menus)}
        </Layout.Content>
      </Layout>
    )
  }
}
export default BlogApp;

BlogApp.defaultProps = {
  prefixCls: 'ym-blog',
  parent: 'blog'
};