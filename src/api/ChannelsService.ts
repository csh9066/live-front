import { SendMessage } from '../typings/common';
import client from './client';

const ChannelsService = {
  async addChannel(title: string) {
    return await client.post('channels/', { title });
  },
  async listChannels() {
    return await client.get('channels/');
  },
  async listChannelChats(id: number) {
    return await client.get(`channels/${id}/chats`);
  },
  async sendChannelChat(id: number, message: SendMessage) {
    return await client.post(`channels/${id}/chats`, message);
  },
  async addChannelMembers(id: number, userEmails: string[]) {
    return await client.post(`channels/${id}/members`, { emails: userEmails });
  },
  async removeChannelMember(channelId: number, memberId: number) {
    return await client.delete(`channels/${channelId}/members/${memberId}`);
  },
};

export default ChannelsService;
