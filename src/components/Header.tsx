import { UserOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { IUser } from '../modules/user';

type HeaderProps = {
  onLogout?: () => void;
  user: IUser;
};

const StyledHeader = styled.header`
  height: 38px;
  background-color: rgba(77, 57, 75, 1.1);
  border-bottom: 1px solid rgb(255, 255, 255, 0.1);

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 16px;
  position: relative;

  .header-menu-container {
    &:hover {
      .header-menu {
        display: block;
      }
    }
  }

  .header-avatar {
    cursor: pointer;
    margin: 6px 0;
  }

  .header-menu {
    display: none;
    position: absolute;
    top: 38px;
    right: 16px;
    border: 1px solid #c1b6c0;
  }
`;

function Header({ onLogout, user }: HeaderProps) {
  return (
    <StyledHeader>
      <div className="header-menu-container">
        {user.profileImageUrl ? (
          <Avatar
            className="header-avatar"
            shape="square"
            src={user.profileImageUrl}
          />
        ) : (
          <Avatar
            className="header-avatar"
            shape="square"
            icon={<UserOutlined />}
          />
        )}
        <Menu className="header-menu">
          <Menu.Item onClick={onLogout}>로그 아웃</Menu.Item>
        </Menu>
      </div>
    </StyledHeader>
  );
}

export default Header;
