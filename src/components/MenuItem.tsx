import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

type MenuItemProps = {
  icon?: React.ReactNode;
  title: string;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onRemove?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const StyledMenuitem = styled.li`
  padding-left: 25px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 28px;
  cursor: pointer;

  &:hover {
    background-color: #1c0b1a;
    .close-btn {
      display: block;
    }
  }

  .left {
    display: flex;
    align-items: center;

    .title-text {
      padding-left: 8px;
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
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .ant-badge {
        width: 100%;
        height: 100%;
      }
    }
  }

  .close-btn {
    display: none;
    width: 20px;
    height: 20px;
    font-size: bold;
  }
`;

function MenuItem({ title, icon, onClick, onRemove }: MenuItemProps) {
  return (
    <StyledMenuitem onClick={onClick}>
      <div className="left">
        <div className="icon-container">{icon}</div>
        <div className="title-text">{title}</div>
      </div>
      {onRemove && (
        <div className="close-btn" onClick={onRemove}>
          <MdClose size="20" />
        </div>
      )}
    </StyledMenuitem>
  );
}

export default MenuItem;
