import React from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { TiPlus } from 'react-icons/ti';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { IFriend } from '../modules/friends';

type FriendListProps = {
  friends: IFriend[];
  onOpenAddFriendModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

function FriendList({ friends, onOpenAddFriendModal }: FriendListProps) {
  return (
    <Menu title="다이렉트 메시지" onClickPlusButton={onOpenAddFriendModal}>
      {friends.map((friend) => (
        <Link to={`/app/friends/${friend.id}`} key={friend.id}>
          <MenuItem
            key={friend.id}
            title={friend.nickname}
            icon={
              friend.profileImageUrl ? (
                <Avatar src={friend.profileImageUrl} shape="square" />
              ) : (
                <Avatar shape="square">{friend.nickname[0]}</Avatar>
              )
            }
          />
        </Link>
      ))}
      <MenuItem
        title="친구 추가"
        icon={<TiPlus />}
        onClick={onOpenAddFriendModal}
      />
    </Menu>
  );
}

export default FriendList;
