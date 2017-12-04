import React from 'react';
import {Layout} from 'components';

class BlogApp extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <Layout className={this.props.prefixCls}>
        <Layout.Header>Blog</Layout.Header>
        <Layout.Content>
          {this.props.children}
        </Layout.Content>
      </Layout>
    )
  }
}
export default BlogApp;

BlogApp.defaultProps = {
  prefixCls: 'ym-blog-app'
};