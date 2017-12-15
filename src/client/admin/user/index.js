import React from 'react';
import classNames from 'classnames';
import {Divider, Icon, Layout, message, Table} from 'antd';
import Edit from './Edit';
import fetch from 'app@utils/fetch';
import Result from 'app@utils/Result';
import EditTableCell from './EditTableCell';
import {utcToLocal} from 'app@utils/Time';

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
    fetch('/api/user').get()
      .then(result => {
        Result(result).success(res => self.setState({dataSource: res.content}))
      });
  };

  h_delete = _id => {
    const self = this;
    fetch('/api/user')
      .delete({_id})
      .then(result => {
        Result(result).success(res => {
            res.message && message.success(res.message);
            self.load();
          })
      });
  };

  g_columns = () => {
    return [
      {
        title: '用户名',
        dataIndex: 'userName',
        key: 'userName',
        width: '30%',
        render: (text, record) => <EditTableCell value={text} data={record} />
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        width: '30%',
        render: text => utcToLocal(text)
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => {
          return (
            <div className='flex-row'>
              <a href='#' onClick={this.h_delete.bind(this, record._id)} style={{color: 'red'}}>delete</a>
              <Divider type='vertical' />
              <a onClick={this.h_delete.bind(this, record._id)}>more <Icon type='down' /></a>
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
        <Header style={{background: 'white', color: 'black'}} className='flex-row'>
          <Edit />
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
