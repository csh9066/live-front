import { Select } from 'antd';
import Modal, { ModalProps } from 'antd/lib/modal/Modal';
import React from 'react';

const { Option } = Select;

type AddChannelProps = {
  onOpenModal: () => void;
};

function AddChannel({ onOpenModal, ...props }: AddChannelProps) {
  return (
    <Modal title="채널 추가" footer={null} {...props}>
      <Select
        mode="multiple"
        placeholder="초대할 친구 선택"
        optionLabelProp="label"
      >
        <Option value="csh9066@gmail.com" label="kimchi">
          <div className="demo-option-label-item">
            <span role="img" aria-label="China">
              🇨🇳
            </span>
            China (中国)
          </div>
        </Option>
      </Select>
    </Modal>
  );
}

export default AddChannel;
