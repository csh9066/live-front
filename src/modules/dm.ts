import { IMessage } from './../typings/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IDMState {
  [friendId: number]: IMessage[];
}

const initialState: IDMState = {};

const dm = createSlice({
  name: 'dm',
  initialState,
  reducers: {
    listDmByFriendId: {
      reducer(state, action: PayloadAction<IMessage[], string, number>) {
        state[action.meta] = action.payload;
      },
      prepare(payload: IMessage[], friendId: number) {
        return {
          payload,
          meta: friendId,
        };
      },
    },
    addDm: {
      reducer(state, action: PayloadAction<IMessage, string, number>) {
        state[action.meta].push(action.payload);
      },
      prepare(payload: IMessage, friendId: number) {
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
