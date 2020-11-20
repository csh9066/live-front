import { Avatar, Comment, Divider } from 'antd';
import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';
import { IMessage } from '../typings/common';

type ChatViewProps = {
  messages: IMessage[];
};

const StyledChatView = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;

  .scroll-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  p {
    line-height: 1.5;
  }

  // antd custom
  .ant-divider-inner-text {
    transform: translateY(50%);
    font-weight: bold;
    border: 1px solid #dfe1e5;
    border-radius: 24px;
    font-size: 14px;
  }
`;

const StyledChatComment = styled(Comment)`
  &:hover {
    background-color: #f0f0f0;
  }
  .comment-author {
    font-weight: bold;
    color: black;
    font-size: 1rem;
  }
  .comment-date {
    font-size: 0.75rem;
    color: #8c8c8c;
    font-weight: 400;
  }
  // antd custom
  .ant-comment-avatar img {
    border-radius: 0%;
    width: 100%;
    height: 100%;
  }
  .ant-comment-inner {
    margin: 0 20px;
  }
`;

function ChatView({ messages }: ChatViewProps) {
  return (
    <StyledChatView>
      <div className="scroll-container">
        <Divider>오늘</Divider>
        {messages.map((message) => (
          <StyledChatComment
            key={message.id}
            author={
              <span className="comment-author">{message.sender.nickname}</span>
            }
            avatar={
              <Avatar
                src={`${message.sender.profileImageUrl}`}
                size="large"
                shape="square"
              />
            }
            content={
              <div dangerouslySetInnerHTML={{ __html: message.content }} />
            }
            datetime={
              <span className="comment-date">
                {moment(message.createdAt).format('LT')}
              </span>
            }
          />
        ))}
      </div>
    </StyledChatView>
  );
}

export default ChatView;
