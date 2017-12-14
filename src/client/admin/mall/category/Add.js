import React from 'react';
import {Button, Form, Icon, Input, message, Modal, Select} from 'antd';
import Immutable from 'immutable';
import {post} from 'app@utils/fetch';

class Add extends React.Component {
  state = {
    visible: false,
    loading: false,
    category: Immutable.fromJS({})
  };

  h_change = (data) => {
    let category = this.state.category.merge(Immutable.fromJS(data));
    this.setState({category});
  };

  h_click = () => {
    this.setState({visible: true});
  };

  h_submit = () => {
    const {category} = this.state;
    if (!category.get('name')) {
      return message.error('请填写类目名称');
    }
    post('/api/mall/category', category.toJS())
      .then(res => console.log(res));
  };

  render() {
    const {visible, loading, category} = this.state;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4}
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 20}
      }
    };
    return (
      <div>
        <Button type='plus' onClick={this.h_click}><Icon type='plus' />新增</Button>
        <Modal visible={visible}
               title='新增类目'
               onCancel={() => this.setState({visible: false, loading: false})}
               footer={[
                 <Button key='submit'
                         type='primary'
                         loading={loading}
                         onClick={this.h_submit}>提交</Button>,
               ]}
        >
          <Form>
            <Form.Item label='类目名称' {...formItemLayout}>
              <Input value={category.get('name')}
                     onChange={e => this.h_change({name: e.target.value})}
              />
            </Form.Item>
            <Form.Item label='上级类目' {...formItemLayout}>
              <Select value={category.get('parent')}
                      onChange={v => this.h_change({parent: v})}
              >

              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Add;
