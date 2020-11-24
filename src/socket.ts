import { io } from 'socket.io-client';

export const SocketEvent = {
  ONLINE: 'ONLINE' as const,
  DM: 'DM' as const,
  CHANNEL_CHAT: 'CHANNEL_CHAT' as const,
  JOIN_CHANNELS: 'JOIN_CHANNELS' as const,
  JOIN_CHANNEL: 'JOIN_CHANNEL' as const,
  ADD_CHANNEL: 'ADD_CHANNEL' as const,
  ADD_FRIEND: 'ADD_FRIEND' as const,
};

const socket = io(`${process.env.REACT_APP_SERVER_PORT}`, {
  transports: ['websocket'],
});

export default socket;
