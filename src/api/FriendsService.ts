import { SendMessage } from '../typings/common';
import client from './client';

const FriendsService = {
  async listFriends() {
    return await client.get('friends/');
  },
  async addFriendByEmail(email: string) {
    return await client.post(`friends/`, { email });
  },
  async removeFriend(friendId: number) {
    return await client.delete(`friends/${friendId}`);
  },
  async listDmByFriendId(friendId: number) {
    return await client.get(`friends/${friendId}/dm`);
  },
  async sendDm(reciverId: number, message: SendMessage) {
    return await client.post(`friends/${reciverId}/dm`, message);
  },
};

export default FriendsService;
