import { LoginFormType } from './../../containers/auth/LoginForm';
import { RegisterFormType } from './../../containers/auth/RegisterForm';
import client from './client';

export const loginRequest = async (loginForm: LoginFormType) => {
  const response = await client.post('/user/login', loginForm);
  return response;
};

export const createUserRequest = async (registerForm: RegisterFormType) => {
  const response = await client.post('/user', registerForm);
  return response;
};

export const checkUserRequest = async () => {
  const response = await client.get('/user/check');
  return response;
};

export const logoutRequest = async () => {
  const response = await client.get('/user/logout');
  return response;
};
