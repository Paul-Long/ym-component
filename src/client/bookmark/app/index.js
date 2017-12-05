import React from 'react';
import {Layout} from 'components';
import BookmarkHeader from './BookmarkHeader';

class Bookmark extends React.Component {
  render() {
    const {prefixCls} = this.props;
    return (
      <Layout className={prefixCls}>
        <BookmarkHeader onNew={() => console.log('new')} />
        <Layout.Content>

        </Layout.Content>
      </Layout>
    )
  }
}

export default Bookmark;
Bookmark.defaultProps = {
  prefixCls: 'ym-bookmark'
};
