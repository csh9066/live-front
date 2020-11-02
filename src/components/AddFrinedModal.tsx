import { Form, Input } from 'antd';
import React, { useState } from 'react';
import ModalTemplate from './ModalTemplate';

type AddFrinedModalProps = {
  onCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  visible: boolean;
};

function AddFrinedModal({ onCancel, visible }: AddFrinedModalProps) {
  const [email, setEmail] = useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  return (
    <ModalTemplate title="친구 추가" onCancel={onCancel} visible={visible}>
      <Input onChange={onChangeEmail} value={email} />
    </ModalTemplate>
  );
}

export default AddFrinedModal;
