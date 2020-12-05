import { Avatar, Dropdown, Menu } from 'antd';
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
`;

const UserMenu = styled(Avatar)`
  cursor: pointer;
  margin: 6px 0;
`;

function Header({ onLogout, user }: HeaderProps) {
  return (
    <StyledHeader>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item onClick={onLogout}>로그 아웃</Menu.Item>
          </Menu>
        }
        trigger={['hover']}
      >
        {user?.profileImageUrl ? (
          <UserMenu shape="square" src={user.profileImageUrl} />
        ) : (
          <UserMenu shape="square">{user.nickname[0]}</UserMenu>
        )}
      </Dropdown>
    </StyledHeader>
  );
}

export default Header;
