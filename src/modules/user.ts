import { checkLoggin, logout as fetchLogout } from '../lib/api/auth';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { call, takeEvery } from 'redux-saga/effects';
import createAsyncSaga from '../lib/utils/createAsyncSaga';
import createAsyncActions from '../lib/utils/createAsyncActions';
import { AxiosResponse } from 'axios';

export type User = {
  id: number;
  email: string;
  nickname: string;
  provider: null | string;
  profileImageUrl: string;
  createdAt: Date;
};

type UserState = {
  user: User | null;
  checkError: AxiosResponse | null;
};

const initialState: UserState = {
  user: null,
  checkError: null,
};

export const checkActions = createAsyncActions('user/CHECK');

export const tempSetUser = createAction<User>('user/TEMP_SET_USER');
export const logout = createAction('user/LOGOUT');

function* logoutSaga() {
  try {
    yield call(fetchLogout);
    localStorage.removeItem('user');
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeEvery(
    checkActions.request.type,
    createAsyncSaga(checkActions, checkLoggin)
  );
  yield takeEvery(logout, logoutSaga);
}

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(checkActions.request, (state, action) => {
      state.checkError = null;
    })
    .addCase(checkActions.success, (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    })
    .addCase(checkActions.failure, (state, action) => {
      state.checkError = action.payload;
      state.user = null;
      localStorage.removeItem('user');
    })
    .addCase(tempSetUser, (state, aciton) => {
      state.user = aciton.payload;
    })
    .addCase(logout, (state) => {
      state.user = null;
    });
});

export default user;
