import React from 'react';
import { TiPlus } from 'react-icons/ti';
import { FaHashtag } from 'react-icons/fa';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { IChannel } from '../modules/channels';
import { Link } from 'react-router-dom';
import confirm from 'antd/lib/modal/confirm';
import { ExclamationCircleOutlined } from '@ant-design/icons';

type ChannelListProps = {
  channels: IChannel[];
  onOpenAddChannelModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  removeChannelById: (channelId: number) => void;
};

function ChannelList({
  channels,
  onOpenAddChannelModal,
  removeChannelById,
}: ChannelListProps) {
  const showRemoveChannelConfirm = (channelId: number) => {
    confirm({
      title: '정말 채널을 삭제 하시겠습니까?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        removeChannelById(channelId);
      },
    });
  };

  return (
    <Menu title="채널" onClickPlusButton={onOpenAddChannelModal}>
      {channels.map((channel) => (
        <Link to={`/app/channels/${channel.id}`} key={channel.id}>
          <MenuItem
            title={channel.title}
            icon={<FaHashtag />}
            onRemove={(e) => {
              e.preventDefault();
              showRemoveChannelConfirm(channel.id);
            }}
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
