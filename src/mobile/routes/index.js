import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from 'm@container/app';
import Home from 'm@container/home';

export default (() => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route path='/mobile/home' exact component={Home} />
      </Switch>
    </App>
  </BrowserRouter>
));