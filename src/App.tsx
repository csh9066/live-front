import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SoicalLogin from './components/SoicalLogin';
import AppContainer from './containers/AppContainer';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={SoicalLogin} />
        <Route path="/app" component={AppContainer} />
        <Route path="*" component={() => <Redirect to="/app" />} />
      </Switch>
    </>
  );
}

export default App;
