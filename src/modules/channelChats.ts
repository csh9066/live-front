import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from '../typings/common';

interface IChatState {
  [channelId: number]: IMessage[];
}

const initialState: IChatState = {};

const channelChats = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    listChats: {
      reducer(state, action: PayloadAction<IMessage[], string, number>) {
        state[action.meta] = action.payload;
      },
      prepare(payload: IMessage[], channelId: number) {
        return {
          payload,
          meta: channelId,
        };
      },
    },
    addChat: {
      reducer(state, action: PayloadAction<IMessage, string, number>) {
        state[action.meta].push(action.payload);
      },
      prepare(payload: IMessage, channelId: number) {
        return {
          payload,
          meta: channelId,
        };
      },
    },
  },
});

export default channelChats;

export const { addChat, listChats } = channelChats.actions;
