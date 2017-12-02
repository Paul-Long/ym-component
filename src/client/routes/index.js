import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Bundle from './Bundle';
import App from 'containers/app';

class Routes extends React.Component {
  r_component = (props, component) => {
    return (
      <Bundle load={() => import(`containers/${component}/index.js`)}>
        {(COM) => <COM {...props} />}
      </Bundle>
    )
  };
  route = (menu) => {
    return (
      <Route key={menu.path}
             path={menu.path}
             exact
             component={(props) => this.r_component(props, menu.component)}
      />)
  };

  render() {
    const menus = [
      {path: '/', component: 'home'},
      {path: '/button', component: 'button'},
      {path: '/menu', component: 'menu'},
      {path: '/layout', component: 'layout'},
      {path: '/table', component: 'table'},
      {path: '/icon', component: 'icon'},
      {path: '/checkbox', component: 'checkbox'}
    ];
    return (
      <HashRouter>
        <App menus={[]}>
          <Switch>
            {menus.map(this.route)}
          </Switch>
        </App>
      </HashRouter>
    )
  }
}

export default Routes;
