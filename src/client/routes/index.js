import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
      {path: '/layout', component: 'layout'}
    ];
    return (
      <BrowserRouter>
        <App menus={[]}>
          <Switch>
            {menus.map(this.route)}
          </Switch>
        </App>
      </BrowserRouter>
    )
  }
}

export default Routes;
