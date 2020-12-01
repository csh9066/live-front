import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthService from '../api/AuthService';
import Header from '../components/Header';
import { RootState } from '../modules';

type HeaderContainerProps = {};

function HeaderContainer(props: HeaderContainerProps) {
  const user = useSelector((state: RootState) => state.user.user);
  const history = useHistory();

  const onLogout = async () => {
    await AuthService.logout();
    history.push('/');
  };

  if (!user) return null;

  return <Header user={user} onLogout={onLogout}></Header>;
}

export default HeaderContainer;
