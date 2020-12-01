import { Layout } from 'antd';
import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import SideBar from './SideBar';

type AppLayoutProps = {
  children: React.ReactNode;
};

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

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <StyledLayout>
        <HeaderContainer />
        <Layout>
          <SideBar />
          <Layout>{children}</Layout>
        </Layout>
      </StyledLayout>
    </>
  );
}

export default AppLayout;
