import { combineReducers } from '@reduxjs/toolkit';
import channelChats from './channelChats';
import channels from './channels';
import dm from './dm';
import friend from './friends';
import modal from './modal';
import user from './user';

const rootReducer = combineReducers({
  user: user.reducer,
  friends: friend.reducer,
  dm: dm.reducer,
  modal: modal.reducer,
  channels: channels.reducer,
  channelChats: channelChats.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
