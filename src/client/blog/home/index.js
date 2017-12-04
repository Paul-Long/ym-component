import React from 'react';

class BlogHome extends React.Component {
  render() {
    return (
      <div className={this.props.prefixCls}>home</div>
    )
  }
}

export default BlogHome;
BlogHome.defaultProps = {
  prefixCls: 'ym-blog-home'
};