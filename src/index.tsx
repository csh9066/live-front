import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import rootReducer, { rootSaga } from './modules';
import * as serviceWorker from './serviceWorker';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { checkActions, tempSetUser } from './modules/user';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

function loadUser() {
  try {
    const user = localStorage.getItem('user');
    store.dispatch(tempSetUser(user as any));
    store.dispatch(checkActions.request('hi'));
  } catch (e) {
    console.log('locaStroage not working');
  }
}
loadUser();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
