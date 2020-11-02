import { Button, Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import React from 'react';
import styled from 'styled-components';

type ModalTemplateProps = ModalProps & {
  onSubmit?: (data: any) => void;
  title: string;
  children: React.ReactNode;
  onCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const Title = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

function ModalTemplate({
  onSubmit,
  onCancel,
  children,
  title,
  ...props
}: ModalTemplateProps) {
  return (
    <Modal
      title={<Title>{title}</Title>}
      onCancel={onCancel}
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
