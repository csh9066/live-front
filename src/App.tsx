import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import IndexPage from './Pages/IndexPage';
import SoicalLoginPage from './Pages/SoicalLoginPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Route path="/login" component={SoicalLoginPage} />
      </Switch>
    </>
  );
}

export default App;
