import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import AuthService from '../api/AuthService';
import AppLayout from '../components/AppLayout';
import GlobalStyles from '../GlobalStyles';
import { RootState } from '../modules';
import { check, IUser } from '../modules/user';
import socket, { SocketEvent } from '../socket';
import AddChannelModal from './AddChannelModal';
import AddFrinedModal from './AddFrinedModal';
import ChannelChatContainer from './ChannelChatContainer';
import DMContianer from './DMContianer';

type AppContainerProps = {};

function AppContainer(props: AppContainerProps) {
  const user = useSelector((state: RootState) => state.user.user);
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
    // eslint-disable-next-line
  }, []);

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
          <Route path="/app/channels/:id" component={ChannelChatContainer} />
        </AppLayout>
      </Switch>
      <AddFrinedModal />
      <AddChannelModal />
    </>
  );
}

export default AppContainer;
