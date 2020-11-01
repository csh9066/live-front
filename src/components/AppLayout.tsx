import { Layout } from 'antd';
import React from 'react';
import styled from 'styled-components';
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
  return (
    <>
      <StyledLayout>
        <SideBar />
        <Layout>
          <ChatHeader />
          <ChatView />
          <ChatFooter>
            <WriteComment />
          </ChatFooter>
        </Layout>
      </StyledLayout>
    </>
  );
}

export default AppLayout;
