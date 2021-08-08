import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useContext, useState } from 'react';
import CadastroLogin from './pages/CadastroLogin'
import Home from './pages/Home'
import AtualizarPerfil from './pages/AtualizarPerfil';
import { AuthContext } from './contexts/AuthContext'

function RotasProtegidas(props){
  const { token } = useContext(AuthContext);

  return(
    <Route render={() => token ? props.children : <Redirect to="/" />} />
  );
}

function Routes() {
  const [token, setToken] = useState();
  return (
    <AuthContext.Provider value={{token, setToken}}>
      <Router>
        <Switch>
          <Route path="/" exact component={CadastroLogin}/>
          <RotasProtegidas>
            <Route path="/home" component={Home}/>
            <Route path="/atualizar" component={AtualizarPerfil}/>
          </RotasProtegidas>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default Routes;
