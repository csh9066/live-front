import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChannelsService from '../api/ChannelsService';
import ChannelList from '../components/ChannelList';
import { RootState } from '../modules';
import { removeChat } from '../modules/channelChats';
import {
  addChannel,
  IChannel,
  listChannels,
  removeChannel,
  removeChannelMember,
  initializeChannels,
} from '../modules/channels';
import { toggleChannelModal } from '../modules/modal';
import socket, { SocketEvent } from '../socket';

type ChannelListContainerProps = {};

function ChannelListContainer(props: ChannelListContainerProps) {
  const channels = useSelector((state: RootState) => state.channels);
  const user = useSelector((state: RootState) => state.user.user);

  const dispatch = useDispatch();

  const onOpenAddChannelModal = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.stopPropagation();
    dispatch(toggleChannelModal());
  };

  const onRemoveChannelById = async (channelId: number) => {
    try {
      const userId = user?.id as number;
      await ChannelsService.removeChannelMember(channelId, userId);
      dispatch(removeChannel(channelId));
      dispatch(removeChat(channelId));
      socket.emit(SocketEvent.REMOVE_CHANNEL, channelId);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchChannels = async () => {
    try {
      const { data } = await ChannelsService.listChannels();
      dispatch(listChannels(data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (channels.length !== 0) {
      const channlIds = channels.map((channel) => channel.id);
      socket?.emit(SocketEvent.JOIN_CHANNELS, channlIds);
    }
  }, [channels]);

  useEffect(() => {
    fetchChannels();
    socket.on(SocketEvent.ADD_CHANNEL, (channel: IChannel) => {
      dispatch(addChannel(channel));
      socket.emit(SocketEvent.JOIN_CHANNEL, channel.id);
    });
    socket.on(
      SocketEvent.LEAVE_CHANNEL_MEMBER,
      (memberId: number, channelId: number) => {
        dispatch(removeChannelMember(memberId, channelId));
      }
    );

    return () => {
      socket.off(SocketEvent.ADD_CHANNEL);
      socket.off(SocketEvent.LEAVE_CHANNEL_MEMBER);
      dispatch(initializeChannels());
    };
    //eslint-disable-next-line
  }, []);

  return (
    <ChannelList
      channels={channels}
      onOpenAddChannelModal={onOpenAddChannelModal}
      removeChannelById={onRemoveChannelById}
    />
  );
}

export default ChannelListContainer;
