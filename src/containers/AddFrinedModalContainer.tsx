import React from 'react';
import AddFrined from '../components/Modal/AddFrined';
import ModalTemplate from '../components/Modal/ModalTemplate';

type AddFrinedModalContainerProps = {
  visible: boolean;
  onCancel: () => void;
};

function AddFrinedModalContainer({
  visible,
  onCancel,
}: AddFrinedModalContainerProps) {
  const onSubmit = () => {};
  return (
    <ModalTemplate
      title="친구 추가"
      onSubmit={onSubmit}
      visible={visible}
      onCancel={onCancel}
    >
      <AddFrined />
    </ModalTemplate>
  );
}

export default AddFrinedModalContainer;
