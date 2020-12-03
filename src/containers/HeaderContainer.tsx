import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthService from '../api/AuthService';
import Header from '../components/Header';
import { RootState } from '../modules';
import { logout } from '../modules/user';

type HeaderContainerProps = {};

function HeaderContainer(props: HeaderContainerProps) {
  const user = useSelector((state: RootState) => state.user.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogout = async () => {
    try {
      await AuthService.logout();
      dispatch(logout());
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  if (!user) return null;

  return <Header user={user} onLogout={onLogout}></Header>;
}

export default HeaderContainer;
