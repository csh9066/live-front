import { createSlice } from '@reduxjs/toolkit';

interface IModalState {
  addFriendModalVisible: boolean;
  addChannelModalVisible: boolean;
}

const initialState: IModalState = {
  addFriendModalVisible: false,
  addChannelModalVisible: false,
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleAddFriendModal(state) {
      state.addFriendModalVisible = !state.addFriendModalVisible;
    },
    toggleChannelModal(state) {
      state.addChannelModalVisible = !state.addChannelModalVisible;
    },
  },
});

export default modal;

export const { toggleAddFriendModal, toggleChannelModal } = modal.actions;
