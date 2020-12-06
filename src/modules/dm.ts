import { IChat } from './../typings/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IDMState {
  [friendId: number]: IChat[];
}

const initialState: IDMState = {};

const dm = createSlice({
  name: 'dm',
  initialState,
  reducers: {
    listDmByFriendId: {
      reducer(state, action: PayloadAction<IChat[], string, number>) {
        state[action.meta] = action.payload;
      },
      prepare(payload: IChat[], friendId: number) {
        return {
          payload,
          meta: friendId,
        };
      },
    },
    addDm: {
      reducer(state, action: PayloadAction<IChat, string, number>) {
        if (state[action.meta]) {
          state[action.meta].push(action.payload);
        }
      },
      prepare(payload: IChat, friendId: number) {
        return {
          payload,
          meta: friendId,
        };
      },
    },
    removeDm(state, action: PayloadAction<number>) {
      if (state[action.payload]) {
        delete state[action.payload];
      }
    },
  },
});

export default dm;

export const { listDmByFriendId, addDm, removeDm } = dm.actions;
