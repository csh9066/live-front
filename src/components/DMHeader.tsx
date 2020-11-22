import React from 'react';
import styled from 'styled-components';
import ChatHeaderTemplate from './ChatHeaderTemplate';

type DMHeaderProps = {
  friendNickName: string;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

function DMHeader({ friendNickName }: DMHeaderProps) {
  return (
    <ChatHeaderTemplate>
      <Wrapper>
        <span>{friendNickName}</span>
      </Wrapper>
    </ChatHeaderTemplate>
  );
}

export default DMHeader;
