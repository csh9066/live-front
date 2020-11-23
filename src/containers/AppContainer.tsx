import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import AuthService from '../api/AuthService';
import AppLayout from '../components/AppLayout';
import useSocket, { SocketEvent, WebSocketProvider } from '../hooks/useSocket';
import GlobalStyles from '../GlobalStyles';
import { RootState } from '../modules';
import { check } from '../modules/user';
import AddChannelModal from './AddChannelModal';
import AddFrinedModal from './AddFrinedModal';
import ChannelChatContainer from './ChannelChatContainer';
import DMContianer from './DMContianer';

type AppContainerProps = {};

function AppContainer(props: AppContainerProps) {
  const user = useSelector((state: RootState) => state.user.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const socket = useSocket();

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

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (user) {
      socket?.emit(SocketEvent.ONLINE, user.id);
    }
  }, [user, socket]);

  if (!user) return null;

  return (
    <>
      <WebSocketProvider>
        <GlobalStyles />
        <Switch>
          <AppLayout>
            <Route
              path="/app"
              exact
              component={() => <Link to="/">인덱스</Link>}
            />
            <Route path="/app/friends/:id" component={DMContianer} />
            <Route path="/app/channels/:id" component={ChannelChatContainer} />
          </AppLayout>
        </Switch>
        <AddFrinedModal />
        <AddChannelModal />
      </WebSocketProvider>
    </>
  );
}

export default AppContainer;
