import React from 'react';
import {Route} from 'react-router-dom';
import Bundle from './Bundle';

class RouteBase extends React.Component {
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
  route = (menus, routes = []) => {
    const {parent = ''} = this.props;
    (menus || []).forEach(m => {
      if ('path' in m) {
        routes.push(<Route key={m.path}
                           path={'/' + parent + m.path}
                           exact
                           component={(props) => this.r_component(props, parent, m.component)}
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
