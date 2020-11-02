import { Input } from 'antd';
import React from 'react';
import ModalTemplate from './ModalTemplate';

type AddChannelModalProps = {
  onCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  visible: boolean;
};

function AddChannelModal({ onCancel, visible }: AddChannelModalProps) {
  return (
    <ModalTemplate title="채널 추가" onCancel={onCancel} visible={visible}>
      <Input placeholder="채널 이름을 입력하세요" />
    </ModalTemplate>
  );
}

export default AddChannelModal;
