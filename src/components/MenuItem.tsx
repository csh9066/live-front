import React from 'react';
import { FaHashtag } from 'react-icons/fa';
import styled from 'styled-components';

type MenuItemProps = {
  icon?: React.ReactNode;
  isChannel?: boolean;
  title: string;
  onOpenModal?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const StyledMenuitem = styled.li`
  padding-left: 30px;
  display: flex;
  align-items: center;
  height: 28px;
  cursor: pointer;

  &:hover {
    background-color: #1c0b1a;
  }

  .icon-container {
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

    .ant-avatar {
      width: 100%;
      height: 100%;
    }
  }

  .title-text {
    padding-left: 8px;
  }
`;

function MenuItem({
  title,
  icon,
  isChannel = true,
  onOpenModal,
}: MenuItemProps) {
  return (
    <StyledMenuitem onClick={onOpenModal}>
      <div className="icon-container">{isChannel ? <FaHashtag /> : icon}</div>
      <div className="title-text">{title}</div>
    </StyledMenuitem>
  );
}

export default MenuItem;
