import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FriendsService from '../api/FriendsService';
import ChatHeaderTemplate from '../components/ChatHeaderTemplate';
import ChatView from '../components/ChatView';
import WriteComment from '../components/WriteComment';
import { RootState } from '../modules';
import { listDmByFriendId, addDm } from '../modules/dm';

type DMContianerProps = {};

function DMContianer(props: DMContianerProps) {
  const params = useParams<{ id: string }>();
  const friendId = parseInt(params.id, 10);
  const dm = useSelector((state: RootState) => state.dm);
  const friends = useSelector((state: RootState) => state.friends);
  const currentFriend = friends.find((friend) => friend.id === friendId);
  const [chat, setChat] = useState<string>('');

  const dispatch = useDispatch();

  const onChangeChat = (chat: string) => {
    setChat(chat);
  };

  const onSendMessage = async () => {
    setChat('');
    try {
      const { data } = await FriendsService.sendDm(friendId, chat);
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

  useEffect(() => {
    if (!dm[friendId]) {
      fetchDm();
    }
    // eslint-disable-next-line
  }, [friendId]);

  if (!currentFriend || !dm[friendId]) return null;

  return (
    <>
      <ChatHeaderTemplate>
        <span>{currentFriend.nickname}</span>
      </ChatHeaderTemplate>
      <ChatView messages={dm[friendId]} />
      <WriteComment
        chat={chat}
        onChangeChat={onChangeChat}
        onSendMessage={onSendMessage}
      />
    </>
  );
}

export default DMContianer;
