import React from 'react';
import {Button, Form, Icon, Input, message, Modal, TreeSelect} from 'antd';
import {Map} from 'immutable';
import fetch from 'app@utils/fetch';
import Result from 'app@utils/Result';

class Add extends React.Component {
  state = {
    visible: false,
    loading: false,
    category: Map()
  };

  h_change = (data) => {
    let category = this.state.category.merge(Map(data));
    this.setState({category});
  };

  h_click = () => {
    this.setState({visible: true});
  };

  h_submit = () => {
    let {category} = this.state;
    if (!category.get('name')) {
      return message.error('请填写类目名称');
    }
    const self = this;
    fetch('/api/mall/category')
      .post(category.toJS())
      .then(res => {
        Result(res).success(res => {
          res.message && message.success(res.message);
          self.setState({visible: false, loading: false, category: Map()}, self.props.onSuccess);
        });
      });
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
        <Button type='primary' onClick={this.h_click}><Icon type='plus' />新增</Button>
        <Modal visible={visible}
               title='新增类目'
               onCancel={() => this.setState({visible: false, loading: false, category: Map()})}
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
              <TreeSelect value={category.get('parent')}
                          dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                          treeData={this.props.categories || []}
                          placeholder='选择上级目录'
                          treeDefaultExpandAll
                          onChange={v => this.h_change({parent: v})}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Add;
