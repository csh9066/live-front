import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './user';

export interface IFriend extends IUser {
  online?: boolean;
}

const initialState: IFriend[] = [];

const friends = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    listFriends(state, action: PayloadAction<IUser[]>) {
      const friends = action.payload.map((friend) => {
        return {
          ...friend,
          online: false,
        };
      });
      state.push(...friends);
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
    onlineFriends(state, action: PayloadAction<number[]>) {
      state.forEach((friend) => {
        if (action.payload.includes(friend.id)) {
          friend.online = true;
        }
      });
    },
    onlineFriend(state, action: PayloadAction<number>) {
      const friendIdx = state.findIndex(
        (friend) => friend.id === action.payload
      );
      state[friendIdx].online = true;
    },
    offlineFriend(state, action: PayloadAction<number>) {
      const friendIdx = state.findIndex(
        (friend) => friend.id === action.payload
      );
      state[friendIdx].online = false;
    },
  },
});

export default friends;

export const {
  listFriends,
  addFriend,
  removeFriend,
  onlineFriends,
  onlineFriend,
  offlineFriend,
} = friends.actions;
