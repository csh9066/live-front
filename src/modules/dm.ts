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
        state[action.meta].push(action.payload);
      },
      prepare(payload: IChat, friendId: number) {
        return {
          payload,
          meta: friendId,
        };
      },
    },
  },
});

export default dm;

export const { listDmByFriendId, addDm } = dm.actions;
