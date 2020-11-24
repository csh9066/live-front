import axios from 'axios';

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

  async listDmByFriendId(friendId: number) {
    return await client.get(`/${friendId}/dm`);
  },
  async sendDm(reciverId: number, content: string) {
    return await client.post(`/${reciverId}/dm`, { content });
  },
};

export default FriendsService;
