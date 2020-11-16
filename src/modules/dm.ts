import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './user';

export interface IDM {
  id: number;
  content: string;
  sender: IUser;
  images: { id: number; src: string } | null;
}

interface IDMState {
  [friendId: number]: IDM[];
}

const initialState: IDMState = {};

const dm = createSlice({
  name: 'dm',
  initialState,
  reducers: {
    listDmByFriendId: {
      reducer(state, action: PayloadAction<IDM[], string, number>) {
        state[action.meta] = action.payload;
      },
      prepare(payload: IDM[], friendId: number) {
        return {
          payload,
          meta: friendId,
        };
      },
    },
    addDm: {
      reducer(state, action: PayloadAction<IDM, string, number>) {
        state[action.meta].push(action.payload);
      },
      prepare(payload: IDM, friendId: number) {
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
