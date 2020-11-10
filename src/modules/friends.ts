import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './user';

export interface IFriends extends IUser {
  countUnReadDm?: number;
}

interface IFriendsState {
  friends: IFriends[];
}

const initialState: IFriendsState = {
  friends: [],
};

const friends = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    listFriends(state, action: PayloadAction<IUser[]>) {
      state.friends = action.payload;
    },
    addFriend(state, action: PayloadAction<IUser>) {
      state.friends.push(action.payload);
    },
  },
});

export default friends;

export const { listFriends, addFriend } = friends.actions;
