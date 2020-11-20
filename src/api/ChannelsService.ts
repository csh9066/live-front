import axios from 'axios';

const client = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_PORT}/channels`,
  withCredentials: true,
});

const ChannelsService = {
  async addChannel(title: string) {
    return await client.post('/', { title });
  },
  async listChannels() {
    return await client.get('/');
  },
  async listChannelChats(id: number) {
    return await client.get(`/${id}/chats`);
  },
  async sendChannelChat(id: number, content: string) {
    return await client.post(`/${id}/chats`, { content });
  },
};

export default ChannelsService;
