import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import AuthService from '../api/AuthService';
import AppLayout from '../components/AppLayout';
import GlobalStyles from '../GlobalStyles';
import { check, IUser } from '../modules/user';
import socket, { SocketEvent } from '../socket';
import AddChannelModal from './AddChannelModal';
import AddFrinedModal from './AddFrinedModal';
import ChannelChatContainer from './ChannelChatContainer';
import DMContianer from './DMContianer';

type AppContainerProps = {};

function AppContainer(props: AppContainerProps) {
  const [socketSession, setSocketSession] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const authenticate = async () => {
    try {
      const { data }: { data: IUser } = await AuthService.check();
      dispatch(check(data));
      socket.emit(SocketEvent.ONLINE, data.id);
    } catch (e) {
      history.push('/');
    }
  };

  useEffect(() => {
    authenticate();
    socket.on(SocketEvent.ONLINE, () => {
      setSocketSession(true);
    });
    // eslint-disable-next-line
  }, []);

  if (!socketSession) return null;

  return (
    <>
      <GlobalStyles />
      <Switch>
        <AppLayout>
          <Route path="/app/friends/:id" component={DMContianer} />
          <Route path="/app/channels/:id" component={ChannelChatContainer} />
        </AppLayout>
      </Switch>
      <AddFrinedModal />
      <AddChannelModal />
    </>
  );
}

export default AppContainer;
