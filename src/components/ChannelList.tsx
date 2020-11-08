import React from 'react';
import { TiPlus } from 'react-icons/ti';
import Menu from './Menu';
import MenuItem from './MenuItem';

type ChannelListProps = {
  channels: string[];
  onOpenModal: () => void;
};

function ChannelList({ channels, onOpenModal }: ChannelListProps) {
  return (
    <Menu
      title="채널"
      onOpenModal={(e) => {
        e.stopPropagation();
        onOpenModal();
      }}
    >
      {channels.map((channel) => (
        <MenuItem title={channel} key={channel} />
      ))}
      <MenuItem
        title="채널 추가"
        isChannel={false}
        icon={<TiPlus />}
        onOpenModal={(e) => {
          e.stopPropagation();
          onOpenModal();
        }}
      />
    </Menu>
  );
}

export default ChannelList;
