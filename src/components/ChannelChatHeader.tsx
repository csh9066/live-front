import React from 'react';
import styled from 'styled-components';
import { IUser } from '../modules/user';
import { FaHashtag } from 'react-icons/fa';
import { BsPersonPlus } from 'react-icons/bs';
import ChatHeaderTemplate from './ChatHeaderTemplate';
import { Avatar, Tooltip } from 'antd';

type ChannelChatHeaderProps = {
  title?: string;
  inUsers?: IUser[];
  onOpenAddMemberModal?: () => void;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .title {
    display: flex;
    align-items: center;

    svg {
      padding-right: 2px;
      padding-top: 3px;
    }
  }

  .right-area {
    display: flex;
    .add-friend {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20px;
      width: 30px;
      height: 30px;
      &:hover {
        background-color: #e9ecef;
      }
    }
  }
`;

function ChannelChatHeader({
  title,
  inUsers,
  onOpenAddMemberModal,
}: ChannelChatHeaderProps) {
  return (
    <ChatHeaderTemplate>
      <Wrapper>
        <div className="title">
          <FaHashtag />
          {title}
        </div>
        <div className="right-area">
          <Avatar.Group>
            {inUsers?.map((user) => (
              <Avatar src={user.profileImageUrl} shape="square" key={user.id} />
            ))}
            <Avatar
              shape="square"
              style={{ background: '#f8f9fa', color: 'black' }}
            >
              {inUsers?.length}
            </Avatar>
          </Avatar.Group>
          <div className="add-friend" onClick={onOpenAddMemberModal}>
            <Tooltip placement="bottom" title="친구 추가">
              <BsPersonPlus size="25" />
            </Tooltip>
          </div>
        </div>
      </Wrapper>
    </ChatHeaderTemplate>
  );
}

export default ChannelChatHeader;
