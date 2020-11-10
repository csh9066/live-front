import { combineReducers } from '@reduxjs/toolkit';
import dm from './dm';
import friends from './friends';
import user from './user';

const rootReducer = combineReducers({
  user: user.reducer,
  friends: friends.reducer,
  dm: dm.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
