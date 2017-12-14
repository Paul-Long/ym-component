import React from 'react';
import {get} from 'app@utils/fetch';
import {Layout} from 'antd';
import Add from './Add';

class Category extends React.Component {
  componentDidMount() {
    get('/api/mall/category')
      .then(res => console.log(res));
  }

  render() {
    return (
      <Layout>
        <Layout.Header className='flex-row' style={{background: 'white'}}>
          <Add />
        </Layout.Header>
        <Layout.Content>

        </Layout.Content>
      </Layout>
    )
  }
}

export default Category;
