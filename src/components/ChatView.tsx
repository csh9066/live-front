import { Avatar, Comment, Divider } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { IDM } from '../modules/dm';

type ChatViewProps = {
  messages: IDM[];
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
            datetime={<span className="comment-date">오후 1:48</span>}
          />
        ))}
        {/* <StyledChatComment
          author={<span className="comment-author">최승호</span>}
          avatar={
            <Avatar
              src={
                'https://ca.slack-edge.com/T01D6JLRG4C-U01CTMS5LEA-7d0fd815bc41-48'
              }
              size="large"
              shape="square"
            />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={<span className="comment-date">오후 1:48</span>}
        />
        <StyledChatComment
          author={<span className="comment-author">최승호</span>}
          avatar={
            <Avatar
              src={
                'https://ca.slack-edge.com/T01D6JLRG4C-U01CTMS5LEA-7d0fd815bc41-48'
              }
              size="large"
              shape="square"
            />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={<span className="comment-date">오후 1:48</span>}
        />
        <StyledChatComment
          author={<span className="comment-author">최승호</span>}
          avatar={
            <Avatar
              src={
                'https://ca.slack-edge.com/T01D6JLRG4C-U01CTMS5LEA-7d0fd815bc41-48'
              }
              size="large"
              shape="square"
            />
          }
          content={
            <>
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
              <Image
                src={`${process.env.PUBLIC_URL}/image.png`}
                width={200}
                style={{ border: '1px solid #ddd' }}
              />
            </>
          }
          datetime={<span className="comment-date">오후 1:48</span>}
        />
        <StyledChatComment
          author={<span className="comment-author">최승호</span>}
          avatar={
            <Avatar
              src={
                'https://ca.slack-edge.com/T01D6JLRG4C-U01CTMS5LEA-7d0fd815bc41-48'
              }
              size="large"
              shape="square"
            />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={<span className="comment-date">오후 1:48</span>}
        />
        <StyledChatComment
          author={<span className="comment-author">최승호</span>}
          avatar={
            <Avatar
              src={
                'https://ca.slack-edge.com/T01D6JLRG4C-U01CTMS5LEA-7d0fd815bc41-48'
              }
              size="large"
              shape="square"
            />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={<span className="comment-date">오후 1:43 </span>}
        /> */}
      </div>
    </StyledChatView>
  );
}

export default ChatView;
