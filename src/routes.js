import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react';
import CadastroLogin from './pages/CadastroLogin'
import Home from './pages/Home'
import Header from './components/Header';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CadastroLogin}/>
        <Header>
          <Route path="/home" component={Home}/>
        </Header>
      </Switch>
    </Router>
  );
}

export default Routes;
