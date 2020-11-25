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
    removeFriend(state, action: PayloadAction<number>) {
      const removeFriendidx = state.findIndex(
        (friend) => friend.id === action.payload
      );
      state.splice(removeFriendidx, 1);
    },
  },
});

export default friends;

export const { listFriends, addFriend, removeFriend } = friends.actions;
