import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FriendsService from '../api/FriendsService';
import ChatView from '../components/ChatView';
import DMHeader from '../components/DMHeader';
import WriteComment from '../components/WriteComment';
import { RootState } from '../modules';
import { listDmByFriendId, addDm } from '../modules/dm';
import socket, { SocketEvent } from '../socket';
import { IChat, SendMessage } from '../typings/common';

type DMContianerProps = {};

function DMContianer(props: DMContianerProps) {
  const params = useParams<{ id: string }>();
  const friendId = parseInt(params.id, 10);
  const dm = useSelector((state: RootState) => state.dm);
  const friends = useSelector((state: RootState) => state.friends);
  const currentFriend = friends.find((friend) => friend.id === friendId);

  const dispatch = useDispatch();

  const sendMessage = async ({ chat, imageUrls }: SendMessage) => {
    try {
      const { data } = await FriendsService.sendDm(friendId, {
        chat,
        imageUrls,
      });
      dispatch(addDm(data, friendId));
    } catch (e) {
      console.log(e);
    }
  };

  const fetchDm = async () => {
    try {
      const { data } = await FriendsService.listDmByFriendId(friendId);
      dispatch(listDmByFriendId(data, friendId));
    } catch (e) {
      console.log(e);
    }
  };

  const reciveDm = async ({
    message,
    senderId,
  }: {
    message: IChat;
    senderId: number;
  }) => {
    dispatch(addDm(message, senderId));
  };

  useEffect(() => {
    fetchDm();
    socket?.on(SocketEvent.DM, reciveDm);
    return () => {
      socket?.off(SocketEvent.DM, reciveDm);
    };
    // eslint-disable-next-line
  }, [friendId]);

  if (!currentFriend || !dm[friendId]) return null;

  return (
    <>
      <DMHeader friendNickName={currentFriend.nickname} />
      <ChatView messages={dm[friendId]} />
      <WriteComment sendMessage={sendMessage} />
    </>
  );
}

export default DMContianer;
