import { Button, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';

type AddChannelModalProps = {};

function AddChannelModal(props: AddChannelModalProps) {
  const [channelName, setChannelName] = useState('');

  const onChangeChannelName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChannelName(e.target.value);
  };

  return (
    <Modal title="채널 추가" footer={<Button type="primary">채널 추가</Button>}>
      <Input
        placeholder="채널 이름을 입력하세요"
        onChange={onChangeChannelName}
        value={channelName}
      />
    </Modal>
  );
}

export default AddChannelModal;
