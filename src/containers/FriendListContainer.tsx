import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

type FriendListContainerProps = {};

function FriendListContainer(props: FriendListContainerProps) {
  const { user } = useSelector((state: RootState) => state.user);
  return <div></div>;
}

export default FriendListContainer;
