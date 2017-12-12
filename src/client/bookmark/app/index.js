import React from 'react';
import {Layout} from 'antd';
import BookmarkHeader from './BookmarkHeader';
import RouteBase from 'routes/RouteBase';
import menus from './menus';
import './style.less';

class Bookmark extends RouteBase {
  render() {
    const {prefixCls} = this.props;
    return (
      <Layout className={prefixCls}>
        <BookmarkHeader onNew={() => console.log('new')} />
        <Layout.Content>
          {this.route(menus)}
        </Layout.Content>
      </Layout>
    )
  }
}

export default Bookmark;
Bookmark.defaultProps = {
  prefixCls: 'ym-bookmark',
  parent: 'bookmark'
};
