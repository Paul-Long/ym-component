import React from 'react';
import {Route} from 'react-router-dom';
import Bundle from './Bundle';

class RouteBase extends React.Component {
  load = (component) => {
    switch (this.props.parent) {
      case 'examples':
        return import(`@examples/${component}/index.js`);
      case 'blog':
        return import(`@blog/${component}/index.js`);
      case 'admin':
        return import(`@admin/${component}/index.js`);
      default:
        return null;
    }
  };
  r_component = (props, component) => {
    return (
      <Bundle load={this.load.bind(this, component)}>
        {(COM) => <COM {...props} />}
      </Bundle>
    )
  };
  route = (menus, routes = []) => {
    const {parent = ''} = this.props;
    (menus || []).forEach(m => {
      if ('path' in m) {
        routes.push(
          <Route key={m.path}
                 path={'/' + parent + m.path}
                 exact
                 component={(props) => this.r_component(props, m.component)}
        />);
      }
      let children = m.children || [];
      if (children.length > 0) {
        routes = this.route(children, routes);
      }
    });
    return routes;
  };
}

export default RouteBase;
