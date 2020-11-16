import { io } from 'socket.io-client';

const socket = io(`${process.env.REACT_APP_SERVER_PORT}`, {
  transports: ['websocket'],
  autoConnect: false,
});

export default socket;
