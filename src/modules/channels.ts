import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './user';

export interface IChannel {
  id: number;
  title: string;
  created_at: Date;
  members: IUser[];
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
    removeChannel(state, action: PayloadAction<number>) {
      const channelIdx = state.findIndex(
        (channel) => channel.id === action.payload
      );

      state.splice(channelIdx, 1);
    },
    addChannelMembers: {
      reducer(state, action: PayloadAction<IUser[], string, number>) {
        state
          .find((channel) => channel.id === action.meta)
          ?.members.push(...action.payload);
      },
      prepare(payload: IUser[], channelId: number) {
        return {
          payload,
          meta: channelId,
        };
      },
    },
    // 첫번째 파라미터 삭제할 맴버 아이디, 두번째 파라미터 채널 아이디
    removeChannelMember: {
      reducer(state, action: PayloadAction<number, string, number>) {
        const channel = state.find((channel) => channel.id === action.meta);
        const removeMemberIdx = channel?.members.findIndex(
          (member) => member.id === action.payload
        );

        if (removeMemberIdx) {
          channel?.members.splice(removeMemberIdx, 1);
        } else {
          console.log('doesnt exit member');
        }
      },
      prepare(payload: number, channelId: number) {
        return {
          payload,
          meta: channelId,
        };
      },
    },
  },
});

export default channels;

export const {
  listChannels,
  addChannel,
  removeChannel,
  addChannelMembers,
  removeChannelMember,
} = channels.actions;
