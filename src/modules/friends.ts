import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './user';

export interface IFriend extends IUser {
  countUnReadDm?: number;
}

const initialState: IFriend[] = [];

const friends = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    listFriends(state, action: PayloadAction<IUser[]>) {
      state.push(...action.payload);
    },
    addFriend(state, action: PayloadAction<IUser>) {
      state.push(action.payload);
    },
  },
});

export default friends;

export const { listFriends, addFriend } = friends.actions;
