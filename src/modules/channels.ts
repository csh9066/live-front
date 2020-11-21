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
    addChannelMembers: {
      reducer(state, action: PayloadAction<IUser[], string, number>) {
        state
          .find((channel) => channel.id === action.meta)
          ?.member.push(...action.payload);
      },
      prepare(payload: IUser[], channelId: number) {
        return {
          payload,
          meta: channelId,
        };
      },
    },
  },
});

export default channels;

export const { listChannels, addChannel, addChannelMembers } = channels.actions;
