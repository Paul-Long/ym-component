import React from 'react';
import fetch from 'app@utils/fetch';
import {Layout} from 'antd';
import Add from './Add';
import Result from 'app@utils/Result';
import Item from './Item';
import './style.less';

class Category extends React.Component {
  state = {
    categories: []
  };
  componentDidMount() {
    this.load();
  }

  load = () => {
    fetch('/api/mall/category')
      .get()
      .then(res => {
        Result(res).success(res => this.setState({categories: res.content}))
      });
  };

  r_item = () => {
    return this.state.categories.map(c => (<Item key={c.key} item={c} onSuccess={this.load} />));
  };

  render() {
    const {categories = []} = this.state;
    return (
      <Layout>
        <Layout.Header className='flex-row' style={{background: 'white'}}>
          <Add categories={categories} onSuccess={this.load} />
        </Layout.Header>
        <Layout.Content>
          {this.r_item()}
        </Layout.Content>
      </Layout>
    )
  }
}

export default Category;
