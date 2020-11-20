import React from 'react';
import { TiPlus } from 'react-icons/ti';
import { FaHashtag } from 'react-icons/fa';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { IChannel } from '../modules/channels';
import { Link } from 'react-router-dom';

type ChannelListProps = {
  channels: IChannel[];
  onOpenAddChannelModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

function ChannelList({ channels, onOpenAddChannelModal }: ChannelListProps) {
  return (
    <Menu title="채널" onClickPlusButton={onOpenAddChannelModal}>
      {channels.map((channel) => (
        <Link to={`/app/channels/${channel.id}`} key={channel.id}>
          <MenuItem
            title={channel.title}
            key={channel.id}
            icon={<FaHashtag />}
          />
        </Link>
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
