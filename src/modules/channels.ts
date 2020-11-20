import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './user';

export interface IChannel {
  id: number;
  title: string;
  created_at: Date;
  member: IUser[];
}

const initialState: IChannel[] = [];

const channels = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    listChannels(state, action: PayloadAction<IChannel[]>) {
      state.push(...action.payload);
    },
    addChannel(state, action: PayloadAction<IChannel>) {
      state.push(action.payload);
    },
  },
});

export default channels;

export const { listChannels, addChannel } = channels.actions;
