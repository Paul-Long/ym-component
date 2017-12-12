import React from 'react';
import {Button, Icon, Modal, Form, Input} from 'antd';
import Immutable from 'immutable';

const FormItem = Form.Item;

class Add extends React.Component {
  state = {
    visible: false,
    loading: false,
    bookmark: Immutable.fromJS({})
  };
  h_submit = () => {

  };
  h_change = (data) => {
    let bookmark = this.state.bookmark.merge(Immutable.fromJS(data));
    this.setState({bookmark});
  };
  render() {
    const {visible, loading, bookmark} = this.state;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 4},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 20},
      },
    };
    return (
      <div>
        <Button type='primary' style={{marginLeft: 30}}
                onClick={() => this.setState({visible: true})}
        ><Icon type='plus' />新增</Button>
        <Modal
          visible={visible}
          title='新增书签'
          onOk={this.h_submit}
          onCancel={() => this.setState({visible: false, loading: false, user: Immutable.fromJS({})})}
          width={500}
          footer={[
            <Button key='submit'
                    type='primary'
                    loading={loading}
                    onClick={this.h_submit}>提交</Button>,
          ]}
        >
          <Form>
            <FormItem label='标题' {...formItemLayout}>
              <Input value={bookmark.get('title') || ''} onChange={e => this.h_change({userName: e.target.value})} />
            </FormItem>
            <FormItem label='地址' {...formItemLayout}>
              <Input value={bookmark.get('url') || ''} onChange={e => this.h_change({userName: e.target.value})} />
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}
export default Add;
