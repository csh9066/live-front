import { io } from 'socket.io-client';

export enum SocketEvent {
  ONLINE = 'ONLINE',
  ONLINE_FRIEND = 'ONLINE_FRIEND',
  ONLINE_FRIENDS = 'ONLINE_FRIENDS',
  OFFLINE_FRIEND = 'OFFLINE_FRIEND',
  DM = 'DM',
  CHANNEL_CHAT = 'CHANNEL_CHAT',
  JOIN_CHANNELS = 'JOIN_CHANNELS',
  JOIN_CHANNEL = 'JOIN_CHANNEL',
  ADD_CHANNEL = 'ADD_CHANNEL',
  REMOVE_CHANNEL = 'REMOVE_CHANNEL',
  LEAVE_CHANNEL_MEMBER = 'LEAVE_CHANNEL_MEMBER',
  ADD_FRIEND = 'ADD_FRIEND',
  REMOVE_FRIEND = 'REMOVE_FRIEND',
}

const socket = io(`${process.env.REACT_APP_SERVER_PORT}`, {
  transports: ['websocket'],
  autoConnect: false,
});

export default socket;
