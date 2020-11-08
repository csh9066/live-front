import { Button, Input, message, Modal } from 'antd';
import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';

type AddFrinedModalProps = {
  visible: boolean;
  loading: boolean;
  isSuccess: boolean;
  error: AxiosError | null;
  onToggle: () => void;
  onSubmit: (email: string) => void;
};

function AddFrinedModal({
  visible,
  loading,
  isSuccess,
  error,
  onToggle,
  onSubmit,
}: AddFrinedModalProps) {
  const [email, setEmail] = useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success('친구 추가 성공');
      onToggle();
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      message.error(error.response?.data);
    }
  }, [error]);

  useEffect(() => {
    if (!visible) {
      setEmail('');
    }
  }, [visible]);

  return (
    <Modal
      title="친구 추가"
      footer={
        <Button
          type="primary"
          onClick={() => onSubmit(email)}
          loading={loading}
        >
          친구 추가
        </Button>
      }
      onCancel={(e) => {
        e.stopPropagation();
        onToggle();
      }}
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
