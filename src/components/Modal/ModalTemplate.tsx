import { Button, Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import React from 'react';
import styled from 'styled-components';

type ModalTemplateProps = ModalProps & {
  onSubmit: () => void;
  title: string;
  children: React.ReactNode;
};

const Title = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

function ModalTemplate({
  onSubmit,
  children,
  title,
  ...props
}: ModalTemplateProps) {
  return (
    <Modal
      title={<Title>{title}</Title>}
      footer={
        <Button type="primary" onClick={onSubmit}>
          보내기
        </Button>
      }
      {...props}
    >
      {children}
    </Modal>
  );
}

export default ModalTemplate;
