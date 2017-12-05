import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Container from 'client/container/Container';
import App from '@examples/app';
import BlogApp from '@blog/app';
import Bookmark from '@bookmark/app';

export default (() => (
  <HashRouter>
    <Switch>
      <Route path='/' exact component={Container} />
      <Route path='/examples' component={App} />
      <Route path='/blog' component={BlogApp} />
      <Route path='/bookmark' component={Bookmark} />
    </Switch>
  </HashRouter>
));
