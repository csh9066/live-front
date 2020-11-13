import { message } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FriendsService from '../api/FriendsService';
import FriendList from '../components/FriendList';
import { RootState } from '../modules';
import { listFriends } from '../modules/friend';
import { toggleAddFriendModal } from '../modules/modal';

type FriendListContainerProps = {};

function FriendListContainer(props: FriendListContainerProps) {
  const friends = useSelector((state: RootState) => state.friend.friends);

  const dispatch = useDispatch();

  const fetchFriends = async () => {
    try {
      const { data } = await FriendsService.listFriends();
      dispatch(listFriends(data));
    } catch (e) {
      message.error(e.resopnse.data);
    }
  };

  const onOpenAddFriendModal = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.stopPropagation();
    dispatch(toggleAddFriendModal());
  };

  useEffect(() => {
    fetchFriends();
    // eslint-disable-next-line
  }, []);

  return (
    <FriendList friends={friends} onOpenAddFriendModal={onOpenAddFriendModal} />
  );
}

export default FriendListContainer;