import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import YmApp from '@app/app';
import Login from '@app/login';
import Examples from '@examples/app';
import Blog from '@blog/app';
import Bookmark from '@bookmark/app';
import Admin from '@admin/app';

export default (() => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={YmApp} />
      <Route path='/examples' component={Examples} />
      <Route path='/blog' component={Blog} />
      <Route path='/bookmark' component={Bookmark} />
      <Route path='/admin' component={Admin}/>
      <Route path='/login' exact component={Login} />
    </Switch>
  </BrowserRouter>
));
