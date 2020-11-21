import { createSlice } from '@reduxjs/toolkit';

interface IModalState {
  addFriendModalVisible: boolean;
  addChannelModalVisible: boolean;
  addMemberModalVisible: boolean;
}

const initialState: IModalState = {
  addFriendModalVisible: false,
  addChannelModalVisible: false,
  addMemberModalVisible: false,
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
    toggleAddMemberModal(state) {
      state.addMemberModalVisible = !state.addMemberModalVisible;
    },
  },
});

export default modal;

export const {
  toggleAddFriendModal,
  toggleChannelModal,
  toggleAddMemberModal,
} = modal.actions;
