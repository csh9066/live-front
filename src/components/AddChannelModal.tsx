import { Button, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';

type AddChannelModalProps = {
  onToggle: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  visible: boolean;
};

function AddChannelModal({ onToggle, visible }: AddChannelModalProps) {
  const [channelName, setChannelName] = useState('');

  const onChangeChannelName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChannelName(e.target.value);
  };

  useEffect(() => {
    if (visible) {
      setChannelName('');
    }
  }, [visible]);

  return (
    <Modal
      title="채널 추가"
      onCancel={onToggle}
      visible={visible}
      footer={<Button type="primary">채널 ㅜ가</Button>}
    >
      <Input
        placeholder="채널 이름을 입력하세요"
        onChange={onChangeChannelName}
        value={channelName}
      />
    </Modal>
  );
}

export default AddChannelModal;
