import React from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { TiPlus } from 'react-icons/ti';
import { Avatar } from 'antd';

type FriendListProps = {
  freinds: { nickname: string; imageUrl: string }[];
  openModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

function FriendList({ freinds, openModal }: FriendListProps) {
  return (
    <Menu title="다이렉트 메시지" onOpenModal={openModal}>
      {freinds.map((freind) => (
        <MenuItem
          key={freind.nickname}
          title={freind.nickname}
          isChannel={false}
          icon={<Avatar src={freind.imageUrl} shape="square" />}
        />
      ))}
      <MenuItem title="친구 추가" isChannel={false} icon={<TiPlus />} />
    </Menu>
  );
}

export default FriendList;
