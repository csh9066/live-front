import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

type LoginPageProps = {};

function LoginPage(props: LoginPageProps) {
  return (
    <AuthTemplate mode="login">
      <LoginForm />
    </AuthTemplate>
  );
}

export default LoginPage;
