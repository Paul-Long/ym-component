import React from 'react';
import {Button} from 'antd';

class BlogHome extends React.Component {
  render() {
    return (
      <div className={this.props.prefixCls}>
        <Button>提交</Button>
      </div>
    )
  }
}

export default BlogHome;
BlogHome.defaultProps = {
  prefixCls: 'ym-blog-home'
};