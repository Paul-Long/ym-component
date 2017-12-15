import React from 'react';
import {Button, Form, Icon, Input, message, Modal} from 'antd';
import {Map} from 'immutable';
import {isNotBlank} from 'app@utils/CheckFormError';
import fetch from 'app@utils/fetch';

const FormItem = Form.Item;

class Add extends React.Component {
  state = {
    visible: false,
    loading: false,
    bookmark: Map({}),
    error: Map()
  };
  h_submit = () => {
    const {bookmark} = this.state;
    let error = isNotBlank(bookmark, [
      {key: 'title', help: '书签标题必填'},
      {key: 'url', help: '书签地址必填'}
    ]);
    this.setState({error});
    if (error.size > 0) {
      return false;
    }
    const {onSuccess} = this.props;
    fetch('/api/bookmark')
      .post(bookmark.toJS())
      .then(res => {
        this.setState({visible: false, loading: false, bookmark: Map()});
        res.message && message.success(res.message);
        (typeof onSuccess === 'function') && onSuccess();
      })
  };
  h_change = (data) => {
    let bookmark = this.state.bookmark.merge(Map(data));
    this.setState({bookmark});
  };
  render() {
    const {visible, loading, bookmark, error} = this.state;
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
          onCancel={() => this.setState({visible: false, loading: false, user: Map()})}
          width={500}
          footer={[
            <Button key='submit'
                    type='primary'
                    loading={loading}
                    onClick={this.h_submit}>提交</Button>,
          ]}
        >
          <Form>
            <FormItem label='标题' {...formItemLayout} {...error.get('title')}>
              <Input value={bookmark.get('title') || ''} onChange={e => this.h_change({title: e.target.value})} />
            </FormItem>
            <FormItem label='地址' {...formItemLayout} {...error.get('url')}>
              <Input value={bookmark.get('url') || ''} onChange={e => this.h_change({url: e.target.value})} />
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}
export default Add;
