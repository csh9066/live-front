import { Badge } from 'antd';
import React from 'react';
import styled from 'styled-components';

type ChatHeaderProps = {};

const StyledChatHedaer = styled.div`
  display: flex;
  padding: 0 20px;
  align-items: center;
  font-weight: bold;
  min-height: 64px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  .ant-badge-status-dot {
    width: 8px;
    height: 8px;
    border: 1px solid gray;
  }
`;

function ChatHeader(props: ChatHeaderProps) {
  return (
    <StyledChatHedaer>
      <div className="container">
        <Badge dot status="success" offset={[0, 3]} />
        <span className="user-id">최승호</span>
      </div>
    </StyledChatHedaer>
  );
}

export default ChatHeader;
