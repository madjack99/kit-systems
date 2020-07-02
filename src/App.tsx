import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import CompaniesPage from './pages/CompaniesPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route path='/companies'>
          <CompaniesPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
