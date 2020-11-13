import { Layout } from 'antd';
import React from 'react';
import ChannelListContainer from '../containers/ChannelListContainer';
import FriendListContainer from '../containers/FriendListContainer';

type SideBarProps = {};

function SideBar(props: SideBarProps) {
  return (
    <Layout.Sider
      style={{ backgroundColor: '#4D394B', userSelect: 'none' }}
      width={200}
    >
      <ChannelListContainer />
      <FriendListContainer />
    </Layout.Sider>
  );
}

export default SideBar;
