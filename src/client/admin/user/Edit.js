import React from 'react';
import {Button, Form, Icon, Input, message, Modal} from 'antd';
import fetch from 'app@utils/fetch';
import Result from 'app@utils/Result';
import Immutable from 'immutable';

const FormItem = Form.Item;

class Edit extends React.Component {
  state = {
    user: Immutable.fromJS({}),
    visible: false,
    loading: false
  };

  h_show = () => {
    const visible = this.state.visible;
    this.setState({visible: !visible});
  };

  h_submit = () => {
    const {user} = this.state;
    if (!user.get('userName')) {
      return message.error('请填写用户名');
    }
    const self = this;
    const {onSuccess} = this.props;
    this.setState({loading: true}, () => {
      fetch('/api/user')
        .post(user.toJS())
        .then(result => {
          Result(result).success(result => {
            result.message && message.success(result.message);
            self.setState({loading: false, visible: false, user: Immutable.fromJS({})});
            (typeof onSuccess === 'function') && onSuccess();
          });
        });
    });
  };

  h_change = (data) => {
    let user = this.state.user.merge(Immutable.fromJS(data));
    this.setState({user});
  };

  render() {
    const {visible, loading, user} = this.state;
    return (
      <div>
        <Button type='primary' onClick={this.h_show}><Icon type='plus' />新增</Button>
        <Modal
          visible={visible}
          title='新增用户'
          onOk={this.h_submit}
          onCancel={() => this.setState({visible: false, loading: false, user: Immutable.fromJS({})})}
          footer={[
            <Button key='submit'
                    type='primary'
                    loading={loading}
                    onClick={this.h_submit}>提交</Button>,
          ]}
        >
          <Form>
            <FormItem label='用户名' className='flex-row'>
              <Input value={user.get('userName') || ''} onChange={e => this.h_change({userName: e.target.value})} />
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Edit;
