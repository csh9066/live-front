import React from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { TiPlus } from 'react-icons/ti';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { IFriend } from '../modules/friends';
import confirm from 'antd/lib/modal/confirm';
import { ExclamationCircleOutlined } from '@ant-design/icons';

type FriendListProps = {
  friends: IFriend[];
  onOpenAddFriendModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  removeFriendById: (friendId: number) => void;
};

function FriendList({
  friends,
  onOpenAddFriendModal,
  removeFriendById,
}: FriendListProps) {
  const showRemoveFriendConfirm = (friendId: number) => {
    confirm({
      title: '정말로 친구를 삭제 하겠습니까?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        removeFriendById(friendId);
      },
    });
  };
  return (
    <Menu title="다이렉트 메시지" onClickPlusButton={onOpenAddFriendModal}>
      {friends.map((friend) => (
        <Link to={`/app/friends/${friend.id}`} key={friend.id}>
          <MenuItem
            title={friend.nickname}
            onRemove={(e) => {
              e.preventDefault();
              showRemoveFriendConfirm(friend.id);
            }}
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
