import { combineReducers } from '@reduxjs/toolkit';
import user from './user';

const rootReducer = combineReducers({
  user: user.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
