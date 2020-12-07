import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';
import { configureStore } from '@reduxjs/toolkit';

import 'antd/dist/antd.css';
import 'react-quill/dist/quill.snow.css';
import App from './App';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'production' ? false : true,
});

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
