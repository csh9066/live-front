import React, { createContext, useContext, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Socket } from 'socket.io-client/build/socket';

type useWebSocketProps = {
  children: React.ReactNode;
};

export const SocketEvent = {
  DM: 'DM',
  CHANNEL_CHAT: 'CHANNEL_CHAT',
  JOIN_CHANNELS: 'JOIN_CHANNEL',
  ONLINE: 'ONLINE',
};

const socket = io(`${process.env.REACT_APP_SERVER_PORT}`, {
  transports: ['websocket'],
  autoConnect: false,
});

const WebSocketContext = createContext<null | Socket>(null);

export function WebSocketProvider({ children }: useWebSocketProps) {
  useEffect(() => {
    socket.connect();

    return () => {
      socket.offAny();
      socket.disconnect();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
}

function useSocket() {
  const socket = useContext(WebSocketContext);
  return socket;
}

export default useSocket;
