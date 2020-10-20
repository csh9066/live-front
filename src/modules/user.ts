import {
  checkUserRequest,
  createUserRequest,
  loginRequest,
  logoutRequest,
} from './../lib/api/user';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { call, takeEvery } from 'redux-saga/effects';
import createAsyncSaga from '../lib/utils/createAsyncSaga';
import createAsyncActions from '../lib/utils/createAsyncActions';

export type User = {
  id: number;
  email: string;
  nickname: string;
  provider: null | string;
  createdAt: Date;
};

type ResponseResult = {
  error: string | null | undefined;
  success: boolean;
};

type UserState = {
  user: User | null;
  login: ResponseResult;
  register: ResponseResult;
  check: ResponseResult;
};

const initialState: UserState = {
  user: null,
  login: {
    error: null,
    success: false,
  },
  register: {
    error: null,
    success: false,
  },
  check: {
    error: null,
    success: false,
  },
};
// export const loginAction = createAsyncThunk(
//   'user/login',
//   async (loginForm: LoginFormType, { rejectWithValue }) => {
//     try {
//       const response = await loginRequest(loginForm);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const loginActions = createAsyncActions('user/LOIGN');
export const registerActions = createAsyncActions('user/REGISTER');
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
    loginActions.request.type,
    createAsyncSaga(loginActions, loginRequest)
  );
  yield takeEvery(
    registerActions.request.type,
    createAsyncSaga(registerActions, createUserRequest)
  );
  yield takeEvery(
    checkActions.request.type,
    createAsyncSaga(checkActions, checkUserRequest)
  );
  yield takeEvery(logout, logoutSaga);
}

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(loginActions.request, (state, action) => {
      state.login.error = null;
      state.login.success = false;
    })
    .addCase(loginActions.success, (state, action) => {
      state.user = action.payload;
      state.login.success = true;
    })
    .addCase(loginActions.failure, (state, action) => {
      state.login.error = action.payload;
    })
    .addCase(registerActions.request, (state, action) => {
      state.register.error = null;
      state.register.success = false;
    })
    .addCase(registerActions.success, (state, action) => {
      state.register.success = true;
    })
    .addCase(registerActions.failure, (state, action) => {
      state.register.error = action.payload;
    })
    .addCase(checkActions.request, (state, action) => {
      state.check.error = null;
      state.check.success = false;
    })
    .addCase(checkActions.success, (state, action) => {
      state.check.success = true;
      state.user = action.payload;
    })
    .addCase(checkActions.failure, (state, action) => {
      state.check.error = action.payload;
    })
    .addCase(tempSetUser, (state, aciton) => {
      state.user = aciton.payload;
    })
    .addCase(logout, (state) => {
      state.user = null;
    });
  // name: 'user',
  // initialState,
  // reducers: {
  //   [loginActions.request.type]: (state) => {
  //     state.login.error = null;
  //     state.login.success = false;
  //   },
  //   [loginActions.success.type]: (state, action) => {
  //     console.log(action.payload, 'ssibal');

  //     state.user = action.payload;
  //     state.login.success = true;
  //   },
  //   [loginActions.failure.type]: (state, action) => {
  //     state.login.error = action.payload;
  //   },
  //   [registerActions.request.type]: (state) => {
  //     state.register.error = null;
  //     state.register.success = false;
  //   },
  //   [registerActions.success.type]: (state) => {
  //     state.register.success = true;
  //   },
  //   [registerActions.failure.type]: (state, action) => {
  //     state.register.error = action.payload;
  //   },
  // },
});

export default user;
