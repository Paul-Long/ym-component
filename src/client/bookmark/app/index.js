import React from 'react';
import {Layout} from 'antd';
import BookmarkHeader from './BookmarkHeader';
import menus from './menus';
import {route} from 'utils/RouteUtil';
import './style.less';

class Bookmark extends React.Component {
  render() {
    const {prefixCls} = this.props;
    return (
      <Layout className={prefixCls}>
        <BookmarkHeader onNew={() => console.log('new')} />
        <Layout.Content>
          {route(menus, 'bookmark')}
        </Layout.Content>
      </Layout>
    )
  }
}

export default Bookmark;
Bookmark.defaultProps = {
  prefixCls: 'ym-bookmark'
};
