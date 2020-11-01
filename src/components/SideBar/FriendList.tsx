import { Avatar } from 'antd';
import React from 'react';
import friend from '../../modules/friend';
import MenuItem from './MenuItem';

type FriendListProps = {
  freinds: { nickname: string; imageUrl: string }[];
};

function FriendList({ freinds }: FriendListProps) {
  return (
    <>
      {freinds.map((freind) => (
        <MenuItem
          title={freind.nickname}
          isChannel={false}
          avatar={<Avatar src={freind.imageUrl} shape="square" />}
        />
      ))}
    </>
  );
}

export default FriendList;
