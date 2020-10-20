import { combineReducers } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import loading from './loading';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
  user,
  loading: loading.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([userSaga()]);
}

export default rootReducer;
