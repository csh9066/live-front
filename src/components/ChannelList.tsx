import React from 'react';
import { TiPlus } from 'react-icons/ti';
import { FaHashtag } from 'react-icons/fa';
import Menu from './Menu';
import MenuItem from './MenuItem';

type ChannelListProps = {
  channels: string[];
  onOpenAddChannelModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

function ChannelList({ channels, onOpenAddChannelModal }: ChannelListProps) {
  return (
    <Menu title="채널" onClickPlusButton={onOpenAddChannelModal}>
      {channels.map((channel) => (
        <MenuItem title={channel} key={channel} icon={<FaHashtag />} />
      ))}
      <MenuItem
        title="채널 추가"
        icon={<TiPlus />}
        onClick={onOpenAddChannelModal}
      />
    </Menu>
  );
}

export default ChannelList;
