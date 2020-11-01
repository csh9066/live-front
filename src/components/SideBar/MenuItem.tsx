import React from 'react';
import { FaHashtag } from 'react-icons/fa';
import styled from 'styled-components';

type MenuItemProps = {
  avatar?: React.ReactNode;
  isChannel?: boolean;
  title: string;
  key?: string | number;
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

function MenuItem({ title, avatar, key, isChannel = true }: MenuItemProps) {
  return (
    <StyledMenuitem key={key}>
      <div className="icon-container">{isChannel ? <FaHashtag /> : avatar}</div>
      <div className="title-text">{title}</div>
    </StyledMenuitem>
  );
}

export default MenuItem;
