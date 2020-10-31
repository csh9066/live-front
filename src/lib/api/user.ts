import client from './client';

export const checkUserRequest = async () => {
  const response = await client.get('/auth/check');
  return response;
};

export const logoutRequest = async () => {
  const response = await client.get('/user/logout');
  return response;
};
