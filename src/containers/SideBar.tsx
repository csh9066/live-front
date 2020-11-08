import { Layout } from 'antd';
import React, { useState } from 'react';
import ChannelList from '../components/ChannelList';
import FriendList from '../components/FriendList';
import AddChannel from '../components/AddChannelModal';
import AddFrined from '../components/AddFrinedModal';
import { RootState } from '../modules';
import { useDispatch, useSelector } from 'react-redux';
import { addFreindActions } from '../modules/friends';

type SideBarProps = {};

function SideBar(props: SideBarProps) {
  const [openAddFriendModal, setOpendAddFriendModal] = useState(false);
  const [openAddChannelModal, setOpendAddChannelModal] = useState(false);

  const { friends, addFriendError, addFriendSucceess } = useSelector(
    (state: RootState) => state.freinds
  );

  const { user } = useSelector((state: RootState) => state.user);
  const loading = useSelector((state: RootState) => state.loading);

  const dispatch = useDispatch();

  const onToggleAddChannelModal = () => {
    setOpendAddChannelModal(!openAddChannelModal);
  };

  const onToggleAddfriendModal = () => {
    setOpendAddFriendModal(!openAddFriendModal);
  };

  const onSubmitAddFriendForm = (email: string) => {
    dispatch(addFreindActions.request(email));
  };

  if (!user) return null;

  return (
    <>
      <Layout.Sider
        style={{ backgroundColor: '#4D394B', userSelect: 'none' }}
        width={200}
      >
        <ChannelList
          channels={['담소방', '일반 채널']}
          onOpenModal={onToggleAddChannelModal}
        />
        <FriendList
          freinds={friends}
          me={user}
          onOpenModal={onToggleAddfriendModal}
        />
      </Layout.Sider>
      <AddChannel
        onToggle={onToggleAddChannelModal}
        visible={openAddChannelModal}
      />
      <AddFrined
        visible={openAddFriendModal}
        isSuccess={addFriendSucceess}
        error={addFriendError}
        onToggle={onToggleAddfriendModal}
        onSubmit={onSubmitAddFriendForm}
        loading={loading[addFreindActions.type]}
      />
    </>
  );
}

export default SideBar;
