import { Button, Input, message, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FriendsService from '../api/FriendsService';
import { RootState } from '../modules';
import { addFriend } from '../modules/friend';
import { toggleAddFriendModal } from '../modules/modal';

type AddFrinedModalProps = {};

function AddFrinedModal(props: AddFrinedModalProps) {
  const [email, setEmail] = useState('');
  const visible = useSelector(
    (state: RootState) => state.modal.addFriendModalVisible
  );

  const dispatch = useDispatch();

  const onToggleModal = () => {
    dispatch(toggleAddFriendModal());
  };

  const onAddFriend = async () => {
    try {
      const { data } = await FriendsService.addFriendByEmail(email);
      dispatch(addFriend(data));
      dispatch(toggleAddFriendModal());
    } catch (e) {
      message.error(e.response.data);
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    setEmail('');
  }, [visible]);

  return (
    <Modal
      title="친구 추가"
      footer={
        <Button type="primary" onClick={onAddFriend}>
          친구 추가
        </Button>
      }
      onCancel={onToggleModal}
      visible={visible}
    >
      <Input
        placeholder="이메일을 입력하세요"
        onChange={onChangeEmail}
        value={email}
      />
    </Modal>
  );
}

export default AddFrinedModal;
