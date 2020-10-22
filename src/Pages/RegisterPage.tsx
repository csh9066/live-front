import React from 'react';
import AuthTemplate from '../components/AuthTemplate';
import RegisterForm from '../containers/RegisterForm';

type RegisterPageProps = {};

function RegisterPage(props: RegisterPageProps) {
  return (
    <AuthTemplate mode="register">
      <RegisterForm />
    </AuthTemplate>
  );
}

export default RegisterPage;
