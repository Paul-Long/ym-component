import React from 'react';
import classNames from 'classnames';
import {Button, Layout, Table} from 'antd';
import {post} from 'app@utils/fetch';
import Result from 'app@utils/Result';
import EditTableCell from './EditTableCell';

const {Header, Content} = Layout;

class UserList extends React.Component {
  state = {
    dataSource: []
  };

  componentDidMount() {
    this.load();
  }

  load = () => {
    const self = this;
    post('/api/user/list', {})
      .then(result => {
        Result.parse(result)
          .success(res => {
            console.log(res.content);
            self.setState({dataSource: res.content});
          })
      });
  };

  g_columns = () => {
    return [
      {
        title: '用户名',
        dataIndex: 'userName',
        key: 'userName',
        render: (text, record) => <EditTableCell value={text} />
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime'
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => {
          return (
            <div className='flex-row'>
              <Button>修改</Button>
              <Button>删除</Button>
            </div>
          )
        }
      }
    ]
  };

  render() {
    const {prefixCls} = this.props;
    const cls = classNames(prefixCls);
    return (
      <Layout className={cls}>
        <Header style={{background: 'white', color: 'black'}}>
          <h2>header</h2>
        </Header>
        <Content style={{paddingLeft: '3px'}}>
          <Table rowKey='_id'
                 dataSource={this.state.dataSource}
                 columns={this.g_columns()}
                 bordered
          />
        </Content>
      </Layout>
    )
  }
}

export default UserList;
UserList.defaultProps = {
  prefixCls: 'ym-admin-user'
};
