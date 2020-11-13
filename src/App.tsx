import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SoicalLogin from './components/SoicalLogin';
import GlobalStyles from './GlobalStyles';
import AppPage from './pages/AppPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/login" render={SoicalLogin} />
        <Route path="/app" render={AppPage} />
      </Switch>
    </>
  );
}

export default App;
