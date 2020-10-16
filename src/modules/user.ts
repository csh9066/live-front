import { login } from './../../../live-backend/src/controllers/UserController';
import { createUserRequest, loginRequest } from './../lib/api/user';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RegisterFormType } from '../containers/auth/RegisterForm';
import { LoginFormType } from '../containers/auth/LoginForm';

type User = {
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
  resgitser: ResponseResult;
};
const initialState = {
  user: null,
  login: {
    error: null,
    success: false,
  },
  register: {
    error: null,
    success: false,
  },
};

export const loginAction = createAsyncThunk(
  'user/login',
  async (loginForm: LoginFormType, { rejectWithValue }) => {
    try {
      const response = await loginRequest(loginForm);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerAction = createAsyncThunk(
  'user/register',
  async (registerForm: RegisterFormType, { rejectWithValue }) => {
    try {
      const reeponse = await createUserRequest(registerForm);
      return reeponse.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [loginAction.pending.type]: (state) => {
      state.login.error = null;
      state.login.success = false;
    },
    [loginAction.fulfilled.type]: (state, action) => {
      state.user = action.payload;
      state.login.success = true;
    },
    [loginAction.rejected.type]: (state, action) => {
      state.login.error = action.payload;
    },
    [registerAction.pending.type]: (state) => {
      state.register.error = null;
      state.register.success = false;
    },
    [registerAction.fulfilled.type]: (state) => {
      state.register.success = true;
    },
    [registerAction.rejected.type]: (state, action) => {
      state.register.error = action.payload;
    },
  },
});

export const userActions = user.actions;
export default user;
