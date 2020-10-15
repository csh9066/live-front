import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

type RegisterPageProps = {};

function RegisterPage(props: RegisterPageProps) {
  return (
    <AuthTemplate mode="register">
      <RegisterForm />
    </AuthTemplate>
  );
}

export default RegisterPage;
