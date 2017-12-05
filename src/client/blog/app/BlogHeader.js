import React from 'react';
import classNames from 'classnames';
import {Layout} from 'components';
import BlogMenu from './BlogMenu';
import Logo from 'app@components/logo';

class BlogHeader extends React.Component {
  render() {
    const {prefixCls} = this.props;
    const cls = classNames(prefixCls);
    return (
      <Layout.Header className={cls}>
        <Logo />
        <BlogMenu />
      </Layout.Header>
    )
  }
}

export default BlogHeader;

BlogHeader.defaultProps = {
  prefixCls: 'ym-blog-header'
};