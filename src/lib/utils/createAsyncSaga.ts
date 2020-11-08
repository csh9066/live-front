import { AsyncActionGroup } from './createAsyncActions';
import { put, call } from 'redux-saga/effects';
import loading from '../../modules/loading';
import { PayloadAction } from '@reduxjs/toolkit';

function createAsyncSaga<P>(actions: AsyncActionGroup, api: any) {
  return function* saga(action: PayloadAction<P>) {
    const { startLoading, finishLoading } = loading.actions;
    yield put(startLoading(actions.type));
    try {
      const response = yield call(api, action.payload);
      yield put(actions.success(response.data));
    } catch (e) {
      yield put(actions.failure(e));
    } finally {
      yield put(finishLoading(actions.type));
    }
  };
}

export default createAsyncSaga;
