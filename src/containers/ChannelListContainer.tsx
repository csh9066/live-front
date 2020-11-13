import React from 'react';
import ChannelList from '../components/ChannelList';

type ChannelListContainerProps = {};

function ChannelListContainer(props: ChannelListContainerProps) {
  const mockChannels = ['일반 채널', '좋은 채널'];

  const onOpenAddChannelModal = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {};
  return (
    <ChannelList
      channels={mockChannels}
      onOpenAddChannelModal={onOpenAddChannelModal}
    />
  );
}

export default ChannelListContainer;
