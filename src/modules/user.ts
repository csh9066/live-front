import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import AuthService from '../api/AuthService';

export interface IUser {
  id: number;
  email: string;
  nickname: string;
  provider: null | string;
  profileImageUrl: string;
  createdAt: Date;
}

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

// actions

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInLocalStroage: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    checkSuccess: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    checkFailure: (state) => {
      state.user = null;
    },
  },
});

export default user;

export const {
  logout,
  setUserInLocalStroage,
  checkSuccess,
  checkFailure,
} = user.actions;

export const check = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await AuthService.checkAuth();
    dispatch(checkSuccess(data));
  } catch (e) {
    dispatch(checkFailure());
    localStorage.removeItem('user');
  }
};
