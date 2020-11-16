import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import AuthService from '../api/AuthService';
import AppLayout from '../components/AppLayout';
import GlobalStyles from '../GlobalStyles';
import { RootState } from '../modules';
import { addDm, IDM } from '../modules/dm';
import { check } from '../modules/user';
import socket from '../socket';
import AddFrinedModal from './AddFrinedModal';
import DMContianer from './DMContianer';

type AppContainerProps = {};

function AppContainer(props: AppContainerProps) {
  const user = useSelector((state: RootState) => state.user.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const authenticate = async () => {
    try {
      const { data } = await AuthService.check();
      dispatch(check(data));
    } catch (e) {
      history.push('/auth/social');
    }
  };

  useEffect(() => {
    authenticate();
    socket.connect();
    socket.on('receive dm', (dm: IDM) => {
      dispatch(addDm(dm, dm.sender.id));
    });
    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (user) {
      socket.emit('login', user.id);
    }
  }, [user]);

  if (!user) return null;

  return (
    <>
      <GlobalStyles />
      <Switch>
        <AppLayout>
          <Route
            path="/app"
            exact
            component={() => <Link to="/">인덱스</Link>}
          />
          <Route path="/app/friends/:id" component={DMContianer} />
        </AppLayout>
      </Switch>
      <AddFrinedModal />
    </>
  );
}

export default AppContainer;
