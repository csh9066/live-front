import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FriendsService from '../api/FriendsService';
import ChatHeader from '../components/ChatHeader';
import ChatView from '../components/ChatView';
import WriteComment from '../components/WriteComment';
import { RootState } from '../modules';
import { listDmByFriendId } from '../modules/dm';

type DMContianerProps = {};

function DMContianer(props: DMContianerProps) {
  const params = useParams<{ id: string }>();
  const friendId = parseInt(params.id, 10);
  const dm = useSelector((state: RootState) => state.dm);
  const friends = useSelector((state: RootState) => state.friend.friends);
  const currentFriend = friends.find((friend) => friend.id === friendId);

  const dispatch = useDispatch();

  const fetchDm = async () => {
    const { data } = await FriendsService.listDmByFriendId(friendId);
    dispatch(listDmByFriendId(data, friendId));
  };

  useEffect(() => {
    fetchDm();
    // eslint-disable-next-line
  }, []);

  if (!currentFriend || !dm[friendId]) return null;

  return (
    <>
      <ChatHeader userName={currentFriend.nickname} online={false} />
      <ChatView messages={dm[friendId]} />
      <div className="chat-footer">
        <WriteComment />
      </div>
    </>
  );
}

export default DMContianer;
