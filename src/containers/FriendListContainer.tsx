import { message } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FriendsService from '../api/FriendsService';
import FriendList from '../components/FriendList';
import { RootState } from '../modules';
import {
  addFriend,
  listFriends,
  removeFriend,
  onlineFriends,
  onlineFriend,
  offlineFriend,
  initializeFriends,
} from '../modules/friends';
import { removeDm } from '../modules/dm';
import { toggleAddFriendModal } from '../modules/modal';
import { IUser } from '../modules/user';
import socket, { SocketEvent } from '../socket';
import { useHistory } from 'react-router-dom';

type FriendListContainerProps = {};

function FriendListContainer(props: FriendListContainerProps) {
  const friends = useSelector((state: RootState) => state.friends);
  const user = useSelector((state: RootState) => state.user.user);
  const history = useHistory();

  const dispatch = useDispatch();

  const fetchFriends = async () => {
    try {
      const response = await FriendsService.listFriends();
      dispatch(listFriends(response.data));
      socket.emit(SocketEvent.ONLINE_FRIENDS, user?.id);
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

  const removeFriendById = async (friendId: number) => {
    try {
      await FriendsService.removeFriend(friendId);
      dispatch(removeFriend(friendId));
      dispatch(removeDm(friendId));
      history.goBack();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchFriends();
    socket.on(SocketEvent.ONLINE_FRIENDS, (friendIds: number[]) => {
      dispatch(onlineFriends(friendIds));
    });
    socket.on(SocketEvent.ONLINE_FRIEND, (friendId: number) => {
      dispatch(onlineFriend(friendId));
    });
    socket.on(SocketEvent.OFFLINE_FRIEND, (friendId: number) => {
      dispatch(offlineFriend(friendId));
    });
    socket.on(SocketEvent.ADD_FRIEND, (friend: IUser) => {
      const onlineFriend = {
        ...friend,
        online: true,
      };
      dispatch(addFriend(onlineFriend));
    });
    socket.on(SocketEvent.REMOVE_FRIEND, (friendId: number) => {
      dispatch(removeFriend(friendId));
    });

    return () => {
      socket.off(SocketEvent.ONLINE_FRIENDS);
      socket.off(SocketEvent.ONLINE_FRIEND);
      socket.off(SocketEvent.OFFLINE_FRIEND);
      socket.off(SocketEvent.ADD_FRIEND);
      socket.off(SocketEvent.REMOVE_FRIEND);
      dispatch(initializeFriends());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <FriendList
      friends={friends}
      onOpenAddFriendModal={onOpenAddFriendModal}
      removeFriendById={removeFriendById}
    />
  );
}

export default FriendListContainer;
