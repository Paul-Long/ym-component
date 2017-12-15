import React from 'react';
import fetch from 'app@utils/fetch';
import Result from 'app@utils/Result';
import {message, Table} from 'antd';
import Add from './Add';

class Home extends React.Component {
  state = {
    dataSource: []
  };

  componentDidMount() {
    this.load();
  }

  load = () => {
    fetch('/api/bookmark').get()
      .then(res => Result(res)
        .success(res => this.setState({dataSource: res.content}))
      );
  };

  h_delete = (_id) => {
    const self = this;
    fetch('/api/bookmark')
      .delete({_id})
      .then(res => {
        Result(res).success(res => {
          res.message && message.success(res.message);
          self.load();
        })
      })
  };

  g_columns = () => {
    return [
      {title: '标题', dataIndex: 'title', width: '30%'},
      {title: '地址', dataIndex: 'url', width: '40%', render: text => (<a href={text} target='_blank'>{text}</a>)},
      {
        title: '操作',
        key: 'action',
        render: (text, record, index) => (<a onClick={this.h_delete.bind(this, record._id)}>删除</a>)
      }
    ]
  };

  render() {
    const {dataSource = []} = this.state;
    return (
      <div>
        <Table rowKey='_id'
               dataSource={dataSource}
               columns={this.g_columns()}
               title={() => (<Add onSuccess={this.load} />)}
        />
      </div>
    )
  }
}

export default Home;
