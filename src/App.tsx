import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SoicalLogin from './components/SoicalLogin';
import AppContainer from './containers/AppContainer';
import LocalLoginForm from './containers/LocalLoginForm';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/app" />} />
        <Route path="/auth/social" component={SoicalLogin} />
        <Route path="/auth/local" component={LocalLoginForm} />
        <Route path="/app" component={AppContainer} />
        <Route path="*" component={() => <Redirect to="/app" />} />
      </Switch>
    </>
  );
}

export default App;
