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
import socket, { SocketEvent } from '../socket';
import { IMessage, SendMessage } from '../typings/common';
import AddMemberModal from './AddMemberModal';

type ChannelChatContainerProps = {};

function ChannelChatContainer(props: ChannelChatContainerProps) {
  const params = useParams<{ id: string }>();
  const channelId = parseInt(params.id, 10);
  const channelChats = useSelector((state: RootState) => state.channelChats);
  const channels = useSelector((state: RootState) => state.channels);
  const currentChannel = channels.find((channel) => channel.id === channelId);

  const dispatch = useDispatch();

  const fetchChannelChats = async () => {
    try {
      const { data } = await ChannelsService.listChannelChats(channelId);
      dispatch(listChats(data, channelId));
    } catch (e) {
      console.log(e);
    }
  };

  const onSendMeesage = async (message: SendMessage) => {
    try {
      await ChannelsService.sendChannelChat(channelId, message);
    } catch (e) {
      console.log(e);
    }
  };

  const onOpenAddMemberModal = () => {
    dispatch(toggleAddMemberModal());
  };

  const reciveChat = ({
    message,
    channelId,
  }: {
    message: IMessage;
    channelId: number;
  }) => {
    dispatch(addChat(message, channelId));
  };

  useEffect(() => {
    fetchChannelChats();
    socket?.on(SocketEvent.CHANNEL_CHAT, reciveChat);
    return () => {
      socket?.off(SocketEvent.CHANNEL_CHAT);
    };
    // eslint-disable-next-line
  }, [channelId]);

  if (!channelChats[channelId]) {
    return null;
  }
  return (
    <>
      <ChannelChatHeader
        title={currentChannel?.title}
        inUsers={currentChannel?.members}
        onOpenAddMemberModal={onOpenAddMemberModal}
      />
      <ChatView messages={channelChats[channelId]} />
      <WriteComment sendMessage={onSendMeesage} />
      <AddMemberModal />
    </>
  );
}

export default ChannelChatContainer;
