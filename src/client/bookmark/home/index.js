import React from 'react';
import fetch from 'app@utils/fetch';
import Result from 'app@utils/Result';
import {Table} from 'antd';
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
      .then(res => Result(res).success(res => this.setState({dataSource: res.content})));
  };

  g_columns = () => {
    return [
      {
        title: '标题',
        dataIndex: 'title',
        width: '30%',
      },
      {
        title: '地址',
        dataIndex: 'url',
        width: '40%'
      },
      {
        title: '操作',
        key: 'action'
      }
    ]
  };

  render() {
    const {dataSource = []} = this.state;
    return (
      <div>
        <Table dataSource={dataSource}
               columns={this.g_columns()}
               title={() => (<Add />)}
        />
      </div>
    )
  }
}

export default Home;
