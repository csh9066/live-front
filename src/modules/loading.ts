import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LoadingState = {
  [loadingType: string]: boolean;
};

const initialState: LoadingState = {};

const loading = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading(state, action: PayloadAction<string>) {
      state[action.payload] = true;
    },
    finishLoading(state, action: PayloadAction<string>) {
      state[action.payload] = false;
    },
  },
});

export default loading;
