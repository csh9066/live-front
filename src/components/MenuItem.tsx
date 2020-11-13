import React from 'react';
import styled from 'styled-components';

type MenuItemProps = {
  icon?: React.ReactNode;
  title: string;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
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

function MenuItem({ title, icon, onClick }: MenuItemProps) {
  return (
    <StyledMenuitem onClick={onClick}>
      <div className="icon-container">{icon}</div>
      <div className="title-text">{title}</div>
    </StyledMenuitem>
  );
}

export default MenuItem;
