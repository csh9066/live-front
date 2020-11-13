import { combineReducers } from '@reduxjs/toolkit';
import dm from './dm';
import friend from './friend';
import modal from './modal';
import user from './user';

const rootReducer = combineReducers({
  user: user.reducer,
  friend: friend.reducer,
  dm: dm.reducer,
  modal: modal.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
