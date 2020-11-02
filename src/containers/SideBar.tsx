import { Layout } from 'antd';
import React, { useState } from 'react';
import ChannelList from '../components/ChannelList';
import FriendList from '../components/FriendList';
import AddChannel from '../components/AddChannelModal';
import AddFrined from '../components/AddFrinedModal';

type SideBarProps = {};

function SideBar(props: SideBarProps) {
  const [opendAddFriendModal, setOpendAddFriendModal] = useState(false);
  const [opendAddChannelModal, setOpendAddChannelModal] = useState(false);

  const onToggleAddChannelModal = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setOpendAddChannelModal(!opendAddChannelModal);
  };

  const onToggleAddfriendModal = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setOpendAddFriendModal(!opendAddFriendModal);
  };
  const friends: { nickname: string; imageUrl: string }[] = [
    {
      nickname: '최승호',
      imageUrl:
        'https://ca.slack-edge.com/T01D6JLRG4C-U01CTMS5LEA-7d0fd815bc41-24',
    },
    {
      nickname: '김수꾸리',
      imageUrl:
        'https://ca.slack-edge.com/T01D6JLRG4C-U01CWG8GZUN-g452c5c6d38b-24',
    },
  ];
  return (
    <>
      <Layout.Sider
        style={{ backgroundColor: '#4D394B', userSelect: 'none' }}
        width={200}
      >
        <ChannelList
          channels={['담소방', '일반 채널']}
          openModal={onToggleAddChannelModal}
        />
        <FriendList freinds={friends} openModal={onToggleAddfriendModal} />
      </Layout.Sider>
      <AddChannel
        onCancel={onToggleAddChannelModal}
        visible={opendAddChannelModal}
      />
      <AddFrined
        visible={opendAddFriendModal}
        onCancel={onToggleAddfriendModal}
      />
    </>
  );
}

export default SideBar;
