import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Container from 'client/container/Container';
import App from 'examples@containers/app';
import BlogApp from 'blog@containers/app/index';

export default (() => (
  <HashRouter>
    <Switch>
      <Route path='/' exact component={Container} />
      <Route path='/examples' component={App} />
      <Route path='/blog' component={BlogApp} />
    </Switch>
  </HashRouter>
));
