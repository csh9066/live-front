import { Layout } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import AddFrinedModalContainer from '../containers/AddFrinedModalContainer';
import ChatHeader from './ChatHeader';
import ChatView from './ChatView';
import ModalTemplate from './Modal/ModalTemplate';
import SideBar from './SideBar';
import WriteComment from './WriteComment';

type AppLayoutProps = {};

const StyledLayout = styled(Layout)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  .ant-layout {
    background: white;
  }
`;

const ChatFooter = styled.div`
  padding: 0 20px 20px 20px;
`;

function AppLayout(props: AppLayoutProps) {
  const [showAddFrinedModal, setShowAddFirendModal] = useState(false);

  const onToggleFirendModal = () => {
    setShowAddFirendModal(!showAddFrinedModal); 
  };

  return (
    <>
      <StyledLayout>
        <SideBar onToggleFirendModal={onToggleFirendModal} />
        <Layout>
          <ChatHeader />
          <ChatView />
          <ChatFooter>
            <WriteComment />
          </ChatFooter>
        </Layout>
      </StyledLayout>
      <AddFrinedModalContainer
        visible={showAddFrinedModal}
        onCancel={onToggleFirendModal}
      />
    </>
  );
}

export default AppLayout;
