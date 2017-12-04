import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Bundle from './Bundle';
import App from 'examples@containers/app';
import BlogApp from 'blog@containers/app/index';

class Routes extends React.Component {
  r_component = (props, parent, component) => {
    return (
      <Bundle load={() => {
        if (parent === 'examples') {
          return import(`examples@containers/${component}/index.js`);
        } else if (parent === 'blog') {
          return import(`blog@containers/${component}/index.js`);
        }
      }}>
        {(COM) => <COM {...props} />}
      </Bundle>
    )
  };
  route = (menu) => {
    return (
      <Route key={menu.path}
             path={'/' + menu.parent + menu.path}
             exact
             component={(props) => this.r_component(props, menu.parent, menu.component)}
      />)
  };

  render() {
    const menus = [
      {path: '/home', parent: 'examples', component: 'home'},
      {path: '/button', parent: 'examples', component: 'button'},
      {path: '/menu', parent: 'examples', component: 'menu'},
      {path: '/layout', parent: 'examples', component: 'layout'},
      {path: '/table', parent: 'examples', component: 'table'},
      {path: '/icon', parent: 'examples', component: 'icon'},
      {path: '/checkbox', parent: 'examples', component: 'checkbox'},
      {path: '/radio', parent: 'examples', component: 'radio'},
      {path: '/input', parent: 'examples', component: 'input'},
      {path: '/iframe', parent: 'examples', component: 'iframe'}
    ];
    const blogMenu = [
      {path: '/home', parent: 'blog', component: 'home'}
    ];
    return (
      <HashRouter>
        <Switch>
          <Route path='/examples' component={App}/>
          <Route path='/blog' component={() => (<BlogApp>{blogMenu.map(this.route)}</BlogApp>)} />
        </Switch>
      </HashRouter>
    )
  }
}

export default Routes;
