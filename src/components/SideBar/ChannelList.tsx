import React from 'react';
import MenuItem from './MenuItem';

type ChannelListProps = {
  channels: any[];
};

function ChannelList({ channels }: ChannelListProps) {
  return (
    <>
      {channels.map((channel) => (
        <MenuItem title={channel} />
      ))}
    </>
  );
}

export default ChannelList;
