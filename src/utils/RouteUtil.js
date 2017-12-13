import React from 'react';
import {Route} from 'react-router-dom';

export default class Bundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: null
    };
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({mod: null});
    props.load().then((mod) => {
      this.setState({mod: mod.default || mod});
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}

export function load(parent, component) {
  switch (parent) {
    case 'examples':
      return import(`@examples/${component}/index.js`);
    case 'blog':
      return import(`@blog/${component}/index.js`);
    case 'admin':
      return import(`@admin/${component}/index.js`);
    case 'bookmark':
      return import(`@bookmark/${component}/index.js`);
    default:
      return null;
  }
}

export function r_component(props, parent, component) {
  return (
    <Bundle load={() => load(parent, component)}>
      {(COM) => <COM {...props} />}
    </Bundle>
  )
}

export function route(menus, parent = '', routes = []) {
  (menus || []).forEach(m => {
    if ('path' in m) {
      routes.push(
        <Route key={m.path}
               path={'/' + parent + m.path}
               exact
               component={(props) => r_component(props, parent, m.component)}
        />);
    }
    let children = m.children || [];
    if (children.length > 0) {
      routes = route(children, parent, routes);
    }
  });
  return routes;
}