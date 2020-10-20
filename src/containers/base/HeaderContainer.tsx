import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/base/Header';
import { RootState } from '../../modules';
import { logout } from '../../modules/user';

type HeaderContainerProps = {};

function HeaderContainer(props: HeaderContainerProps) {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return <Header user={user} onLogout={onLogout}></Header>;
}

export default HeaderContainer;
