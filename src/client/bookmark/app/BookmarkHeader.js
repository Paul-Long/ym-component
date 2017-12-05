import React from 'react';
import {Layout, Button, Icon} from 'components';

export default ((props) => {
  return (
    <Layout.Header className='flex-end'>
      <Button onClick={props.onNew}><Icon type='plus' />新增</Button>
    </Layout.Header>
  );
});