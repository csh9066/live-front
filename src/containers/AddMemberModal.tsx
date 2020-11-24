import { Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ChannelsService from '../api/ChannelsService';
import AddMemberForm from '../components/AddMemberForm';
import { RootState } from '../modules';
import { addChannelMembers } from '../modules/channels';
import { toggleAddMemberModal } from '../modules/modal';

type AddMemberModalProps = {};

function AddMemberModal(props: AddMemberModalProps) {
  const params = useParams<{ id: string }>();
  const channelId = parseInt(params.id);
  const friends = useSelector((state: RootState) => state.friends);
  const channels = useSelector((state: RootState) => state.channels);
  const currentChannel = channels.find((channel) => channel.id === channelId);
  const membersIdInChannel =
    currentChannel?.members.map((member) => member.id) || [];
  const addableFriends = friends.filter(
    (friend) => !membersIdInChannel.includes(friend.id)
  );
  const addMemberModalVisible = useSelector(
    (state: RootState) => state.modal.addMemberModalVisible
  );

  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);

  const dispatch = useDispatch();

  const onChangeAddMemberForm = (value: string[]) => {
    setSelectedEmails([...value]);
  };

  const onCancelModal = () => {
    dispatch(toggleAddMemberModal());
    setSelectedEmails([]);
  };

  const onAddMembers = async () => {
    try {
      const { data } = await ChannelsService.addChannelMembers(
        channelId,
        selectedEmails
      );
      dispatch(addChannelMembers(data, channelId));
      dispatch(toggleAddMemberModal());
      setSelectedEmails([]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal
      title="맴버 추가"
      visible={addMemberModalVisible}
      onCancel={onCancelModal}
      onOk={onAddMembers}
    >
      <AddMemberForm
        friends={addableFriends}
        onSelect={onChangeAddMemberForm}
        selectedFriendsEmail={selectedEmails}
      />
    </Modal>
  );
}

export default AddMemberModal;
