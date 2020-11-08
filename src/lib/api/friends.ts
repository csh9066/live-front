import client from './client';

export const listFriend = async () => {
  return await client.get('/friends/');
};

export const addFriendByEmail = async (email: string) => {
  return await client.post(`/friends/${email}`);
};
