import axios from 'axios';
import { SendMessage } from '../typings/common';

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
  async sendChannelChat(id: number, message: SendMessage) {
    return await client.post(`/${id}/chats`, message);
  },
  async addChannelMembers(id: number, userEmails: string[]) {
    return await client.post(`/${id}/members`, { emails: userEmails });
  },
  async removeChannelMember(channelId: number, memberId: number) {
    return await client.delete(`/${channelId}/members/${memberId}`);
  },
};

export default ChannelsService;
