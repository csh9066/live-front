import axios from 'axios';
import { SendMessage } from '../typings/common';

const client = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_PORT}/friends`,
  withCredentials: true,
});

const FriendsService = {
  async listFriends() {
    return await client.get('/');
  },
  async addFriendByEmail(email: string) {
    return await client.post(`/`, { email });
  },
  async removeFriend(friendId: number) {
    return await client.delete(`/${friendId}`);
  },
  async listDmByFriendId(friendId: number) {
    return await client.get(`/${friendId}/dm`);
  },
  async sendDm(reciverId: number, message: SendMessage) {
    return await client.post(`/${reciverId}/dm`, message);
  },
};

export default FriendsService;
