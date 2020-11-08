import { AxiosError } from 'axios';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import { addFriendByEmail, listFriend } from '../lib/api/friends';
import createAsyncActions from '../lib/utils/createAsyncActions';
import createAsyncSaga from '../lib/utils/createAsyncSaga';
import { User } from './user';

type FriendsState = {
  friends: User[];
  listFriendError: AxiosError | null;
  addFriendError: AxiosError | null;
  addFriendSucceess: boolean;
};

const initialState: FriendsState = {
  friends: [],
  listFriendError: null,
  addFriendError: null,
  addFriendSucceess: false,
};

export const listFriendActions = createAsyncActions('friends/LIST_FRIEND');
export const addFreindActions = createAsyncActions('friends/ADD_FRIEND');

export function* freindsSaga() {
  yield takeEvery(
    listFriendActions.request.type,
    createAsyncSaga(listFriendActions, listFriend)
  );
  yield takeEvery(
    addFreindActions.request.type,
    createAsyncSaga<User>(addFreindActions, addFriendByEmail)
  );
}

const freinds = createReducer(initialState, (builder) => {
  builder
    .addCase(listFriendActions.request, (state) => {
      state.listFriendError = null;
    })
    .addCase(
      listFriendActions.success,
      (state, aciton: PayloadAction<User[]>) => {
        state.friends = aciton.payload;
      }
    )
    .addCase(listFriendActions.failure, (state, action) => {
      state.listFriendError = action.payload;
    })
    .addCase(addFreindActions.request, (state) => {
      state.addFriendError = null;
      state.addFriendSucceess = false;
    })
    .addCase(addFreindActions.success, (state, action: PayloadAction<User>) => {
      state.friends.push(action.payload);
      state.addFriendSucceess = true;
    })
    .addCase(addFreindActions.failure, (state, aciton) => {
      state.addFriendError = aciton.payload;
    });
});

export default freinds;
