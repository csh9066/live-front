import { checkUserRequest, logoutRequest } from './../lib/api/user';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { call, takeEvery } from 'redux-saga/effects';
import createAsyncSaga from '../lib/utils/createAsyncSaga';
import createAsyncActions from '../lib/utils/createAsyncActions';

export type User = {
  id: number;
  email: string;
  nickname: string;
  provider: null | string;
  profileImageUrl: string;
  createdAt: Date;
};

type ResponseResult = {
  error: string | null | undefined;
  success: boolean;
};

type UserState = {
  user: User | null;
  check: ResponseResult;
};

const initialState: UserState = {
  user: null,
  check: {
    error: null,
    success: false,
  },
};

export const checkActions = createAsyncActions('user/CHECK');

export const tempSetUser = createAction<User>('user/TEMP_SET_USER');
export const logout = createAction('user/LOGOUT');

function* logoutSaga() {
  try {
    yield call(logoutRequest);
    localStorage.removeItem('user');
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeEvery(
    checkActions.request.type,
    createAsyncSaga(checkActions, checkUserRequest)
  );
  yield takeEvery(logout, logoutSaga);
}

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(checkActions.request, (state, action) => {
      state.check.error = null;
      state.check.success = false;
    })
    .addCase(checkActions.success, (state, action) => {
      state.check.success = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    })
    .addCase(checkActions.failure, (state, action) => {
      state.check.error = action.payload;
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
