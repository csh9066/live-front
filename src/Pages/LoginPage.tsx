import React from 'react';
import AuthTemplate from '../components/AuthTemplate';
import LoginForm from '../containers/LoginForm';

type LoginPageProps = {};

function LoginPage(props: LoginPageProps) {
  return (
    <AuthTemplate mode="login">
      <LoginForm />
    </AuthTemplate>
  );
}

export default LoginPage;
