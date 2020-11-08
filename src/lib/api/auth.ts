import client from './client';

export const checkLoggin = async () => {
  return await client.get('/auth/check');
};

export const logout = async () => {
  return await client.get('/users/logout');
};
