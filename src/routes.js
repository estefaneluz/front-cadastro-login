import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react';
import CadastroLogin from './pages/CadastroLogin'
import Home from './pages/Home'
import AtualizarPerfil from './pages/AtualizarPerfil';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CadastroLogin}/>
        <Route path="/home" component={Home}/>
        <Route path="/atualizar" component={AtualizarPerfil}/>
      </Switch>
    </Router>
  );
}

export default Routes;
