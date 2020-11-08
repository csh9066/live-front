import React from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { TiPlus } from 'react-icons/ti';
import { Avatar } from 'antd';
import { User } from '../modules/user';

type FriendListProps = {
  me: User;
  freinds: User[];
  onOpenModal: () => void;
};

function FriendList({ me, freinds, onOpenModal }: FriendListProps) {
  return (
    <Menu
      title="다이렉트 메시지"
      onOpenModal={(e) => {
        e.stopPropagation();
        onOpenModal();
      }}
    >
      <MenuItem
        title={me.nickname}
        isChannel={false}
        icon={<Avatar src={me.profileImageUrl} shape="square" />}
      />
      {freinds.map((freind) => (
        <MenuItem
          key={freind.nickname}
          title={freind.nickname}
          isChannel={false}
          icon={<Avatar src={freind.profileImageUrl} shape="square" />}
        />
      ))}
      <MenuItem
        title="친구 추가"
        isChannel={false}
        icon={<TiPlus />}
        onOpenModal={(e) => {
          e.stopPropagation();
          onOpenModal();
        }}
      />
    </Menu>
  );
}

export default FriendList;
