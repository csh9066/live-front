import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChannelsService from '../api/ChannelsService';
import { RootState } from '../modules';
import { addChannel } from '../modules/channels';
import { toggleChannelModal } from '../modules/modal';

type AddChannelModalProps = {};

function AddChannelModal(props: AddChannelModalProps) {
  const [channelTitle, setChannelTitle] = useState('');
  const addFriendModalVisible = useSelector(
    (state: RootState) => state.modal.addChannelModalVisible
  );

  const dispatch = useDispatch();

  const onToggleAddChannelModal = () => {
    dispatch(toggleChannelModal());
  };

  const onChangeChannelTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChannelTitle(e.target.value);
  };

  const onAddChannel = async () => {
    try {
      const { data } = await ChannelsService.addChannel(channelTitle);
      dispatch(addChannel(data));
      dispatch(toggleChannelModal());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal
      title="채널 추가"
      footer={
        <Button type="primary" onClick={onAddChannel}>
          채널 추가
        </Button>
      }
      onCancel={onToggleAddChannelModal}
      visible={addFriendModalVisible}
    >
      <Input
        placeholder="채널 이름을 입력하세요"
        onChange={onChangeChannelTitle}
        value={channelTitle}
      />
    </Modal>
  );
}

export default AddChannelModal;
