import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSocket, { SocketEvent } from '../hooks/useSocket';
import ChannelsService from '../api/ChannelsService';
import ChannelList from '../components/ChannelList';
import { RootState } from '../modules';
import { listChannels } from '../modules/channels';
import { toggleChannelModal } from '../modules/modal';

type ChannelListContainerProps = {};

function ChannelListContainer(props: ChannelListContainerProps) {
  const channels = useSelector((state: RootState) => state.channels);
  const socket = useSocket();

  const dispatch = useDispatch();

  const onOpenAddChannelModal = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.stopPropagation();
    dispatch(toggleChannelModal());
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
  }, [channels, socket]);

  useEffect(() => {
    fetchChannels();
    //eslint-disable-next-line
  }, []);

  return (
    <ChannelList
      channels={channels}
      onOpenAddChannelModal={onOpenAddChannelModal}
    />
  );
}

export default ChannelListContainer;
