import React from 'react';
import {Button, message} from 'antd';
import {get} from 'app@utils/fetch';
import Result from 'app@utils/Result';

class Logout extends React.Component {
  h_logout = () => {
    const {history} = this.props;
    get('/api/user/logout')
      .then(result => {
        Result.parse(result)
          .success(res => {
            (res.message) && message.success(res.message);
            history.push('/');
          });
      });
  };

  render() {
    return (<Button onClick={this.h_logout}>登出</Button>)
  }
}
export default Logout;
