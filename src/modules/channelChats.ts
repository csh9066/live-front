import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChat } from '../typings/common';

interface IChatState {
  [channelId: number]: IChat[];
}

const initialState: IChatState = {};

const channelChats = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    listChats: {
      reducer(state, action: PayloadAction<IChat[], string, number>) {
        state[action.meta] = action.payload;
      },
      prepare(payload: IChat[], channelId: number) {
        return {
          payload,
          meta: channelId,
        };
      },
    },
    addChat: {
      reducer(state, action: PayloadAction<IChat, string, number>) {
        if (state[action.meta]) {
          state[action.meta].push(action.payload);
        }
      },
      prepare(payload: IChat, channelId: number) {
        return {
          payload,
          meta: channelId,
        };
      },
    },
    removeChat(state, aciton: PayloadAction<number>) {
      if (state[aciton.payload]) {
        delete state[aciton.payload];
      }
    },
  },
});

export default channelChats;

export const { addChat, listChats, removeChat } = channelChats.actions;
