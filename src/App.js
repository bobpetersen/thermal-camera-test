import React from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Gallery from './components/Gallery/Gallery';
import Search from './components/Search/Search';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={Dashboard}
        />
        <Route
          path="/gallery"
          component={Gallery}
        />
        <Route
          path="/search"
          component={Search}
        />
        {/* OTHERWISE no path */}
        <Route
          render={() => <h1>404</h1>}
        />
      </Switch>
    </Router>
  </div>
);

export default App;