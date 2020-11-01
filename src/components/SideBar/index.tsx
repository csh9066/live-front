import { Layout } from 'antd';
import React from 'react';
import ChannelListContainer from '../../containers/ChannelListContainer';
import FriendListContainer from '../../containers/FriendListContainer';
import Menu from './Menu';

type SideBarProps = {};

function SideBar({}: SideBarProps) {
  return (
    <Layout.Sider style={{ backgroundColor: '#4D394B' }} width={200}>
      <ChannelListContainer />
      <FriendListContainer />
    </Layout.Sider>
  );
}

export default SideBar;
