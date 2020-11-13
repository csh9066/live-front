import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import AuthService from '../api/AuthService';
import AppLayout from '../components/AppLayout';
import GlobalStyles from '../GlobalStyles';
import { RootState } from '../modules';
import { check } from '../modules/user';
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
      console.log('인증에 실패 했습니다.');
      history.push('/login');
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
          <Route path="/app/friends/:id" component={DMContianer} />
        </AppLayout>
      </Switch>
      <AddFrinedModal />
    </>
  );
}

export default AppContainer;
