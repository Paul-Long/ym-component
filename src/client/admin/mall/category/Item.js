import React from 'react';
import {Button, message, Modal, Tree} from 'antd';
import fetch from 'app@utils/fetch';
import Result from 'app@utils/Result';

const TreeNode = Tree.TreeNode;

class Item extends React.Component {
  state = {
    visible: false,
    loading: false,
    checkedKeys: []
  };

  h_click = () => {
    this.setState({visible: true});
  };
  h_submit = (e) => {
    e.stopPropagation();
    this.setState({loading: true});
    const {onSuccess} = this.props;
    fetch('/api/mall/category')
      .delete({ids: this.state.checkedKeys})
      .then(res => {
        Result(res).success(res => {
          this.setState({loading: false, visible: false, checkedKeys: []});
          res.message && message.success(res.message);
          (typeof onSuccess === 'function') && onSuccess();
        });
      });
  };
  h_cancel = (e) => {
    e.stopPropagation();
    this.setState({visible: false, loading: false});
  };
  h_checked = (checkedKeys) => {
    this.setState({checkedKeys});
  };

  r_node = (items) => {
    return items.map(item => {
      let title = (<span style={{marginLeft: 5}}>{item.label}</span>);
      let props = {
        key: item.key,
        title
      };
      let children = item.children || [];
      if (children.length > 0) {
        children = this.r_node(children);
        return (<TreeNode {...props}>{children}</TreeNode>)
      }
      return (<TreeNode {...props} />)
    })
  };

  render() {
    const {item} = this.props;
    const {visible, loading, checkedKeys} = this.state;
    return (
      <div className='ym-category-item' onClick={this.h_click}>
        {item.label}
        <Modal visible={visible}
               title={`类目(${item.label})-管理`}
               onCancel={this.h_cancel}
               footer={[
                 <Button key='submit'
                         type='danger'
                         ghost
                         loading={loading}
                         onClick={this.h_submit}>批量删除</Button>
               ]}
        >
          <Tree defaultExpandAll
                checkable
                multiple
                className='category-tree'
                selectedKeys={checkedKeys}
                checkedKeys={checkedKeys}
                onCheck={this.h_checked}
          >
            {this.r_node([item])}
          </Tree>
        </Modal>
      </div>
    )
  }
}

export default Item;
