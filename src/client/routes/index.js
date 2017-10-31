import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Bundle from './Bundle';
import App from 'containers/App';

class Routes extends React.Component {
  renderComponent = (props, component) => {
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
             component={(props) => this.renderComponent(props, menu.component)}
      />)
  };
  render() {
    const menus = [
      {path: 'button', component: 'Button'}
    ];
    return (
      <BrowserRouter>
        <App menus={[]}>
          {menus.map(this.route)}
        </App>
      </BrowserRouter>
    )
  }
}

export default Routes;
