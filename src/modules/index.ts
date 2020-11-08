import { combineReducers } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import freinds, { freindsSaga } from './friends';
import loading from './loading';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
  user,
  loading: loading.reducer,
  freinds,
});
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([userSaga(), freindsSaga()]);
}

export default rootReducer;
