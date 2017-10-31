import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {createHashHistory} from 'history'
import App from 'containers/App';

const history = createHashHistory();

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <App menus={[]}>
        </App>
      </Router>
    )
  }
}

export default Routes;
