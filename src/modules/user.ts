import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  id: number;
  email: string;
  nickname: string;
  provider: null | string;
  profileImageUrl?: string;
  createdAt: Date;
}

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    check: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export default user;

export const { logout, check } = user.actions;
