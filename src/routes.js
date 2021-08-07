import React from 'react';
import CadastroLogin from './pages/CadastroLogin'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CadastroLogin}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </Router>
  );
}

export default Routes;
