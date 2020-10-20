import React from 'react';
import BaseTemplate from '../components/base/BaseTemplate';
import RoomList from '../components/base/RoomList';

type IndexPageProps = {};

function IndexPage(props: IndexPageProps) {
  return (
    <>
      <BaseTemplate>
        <RoomList />
      </BaseTemplate>
    </>
  );
}

export default IndexPage;
