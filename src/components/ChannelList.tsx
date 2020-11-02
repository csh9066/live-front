import React from 'react';
import { TiPlus } from 'react-icons/ti';
import Menu from './Menu';
import MenuItem from './MenuItem';

type ChannelListProps = {
  channels: string[];
  openModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

function ChannelList({ channels, openModal }: ChannelListProps) {
  return (
    <Menu title="채널" onOpenModal={openModal}>
      {channels.map((channel) => (
        <MenuItem title={channel} key={channel} />
      ))}
      <MenuItem title="채널 추가" isChannel={false} icon={<TiPlus />} />
    </Menu>
  );
}

export default ChannelList;
