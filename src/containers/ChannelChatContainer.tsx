import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ChannelsService from '../api/ChannelsService';
import ChannelChatHeader from '../components/ChannelChatHeader';
import ChatView from '../components/ChatView';
import WriteComment from '../components/WriteComment';
import { RootState } from '../modules';
import { addChat, listChats } from '../modules/channelChats';
import { toggleAddMemberModal } from '../modules/modal';
import AddMemberModal from './AddMemberModal';

type ChannelChatContainerProps = {};

function ChannelChatContainer(props: ChannelChatContainerProps) {
  const params = useParams<{ id: string }>();
  const channelId = parseInt(params.id, 10);
  const channelChats = useSelector((state: RootState) => state.channelChats);
  const channels = useSelector((state: RootState) => state.channels);
  const currentChannel = channels.find((channel) => channel.id === channelId);
  const [chat, setChat] = useState<string>('');

  const dispatch = useDispatch();

  const fetchChannelChats = async () => {
    try {
      const { data } = await ChannelsService.listChannelChats(channelId);
      dispatch(listChats(data, channelId));
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeChat = (chat: string) => {
    setChat(chat);
  };

  const onSendMeesage = async () => {
    setChat('');
    try {
      const { data } = await ChannelsService.sendChannelChat(channelId, chat);
      dispatch(addChat(data, channelId));
    } catch (e) {
      console.log(e);
    }
  };

  const onOpenAddMemberModal = () => {
    dispatch(toggleAddMemberModal());
  };

  useEffect(() => {
    if (!channelChats[channelId]) {
      fetchChannelChats();
    }
    // eslint-disable-next-line
  }, [channelId]);

  if (!channelChats[channelId]) {
    return null;
  }
  return (
    <>
      <ChannelChatHeader
        title={currentChannel?.title}
        inUsers={currentChannel?.member}
        onOpenAddMemberModal={onOpenAddMemberModal}
      />
      <ChatView messages={channelChats[channelId]} />
      <WriteComment
        chat={chat}
        onChangeChat={onChangeChat}
        onSendMessage={onSendMeesage}
      />
      <AddMemberModal />
    </>
  );
}

export default ChannelChatContainer;
