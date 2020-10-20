import { createAction } from '@reduxjs/toolkit';

function createAsyncActions(type: string) {
  const REQUEST = `${type}_REQUEST`;
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return {
    type,
    request: createAction<any>(REQUEST),
    success: createAction<any>(SUCCESS),
    failure: createAction<any>(FAILURE),
  };
}

export type AsyncActionGroup = ReturnType<typeof createAsyncActions>;

export default createAsyncActions;
