import { Select } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { IFriend } from '../modules/friends';

const { Option } = Select;

type AddMemberFormProps = {
  friends: IFriend[];
  onSelect: (value: string[]) => void;
  selectedFriendsEmail: string[];
};

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
  span {
    font-weight: bold;
  }
`;

function AddMemberForm({
  friends,
  onSelect,
  selectedFriendsEmail,
}: AddMemberFormProps) {
  return (
    <Select
      mode="multiple"
      optionLabelProp="label"
      style={{ width: '100%' }}
      onChange={onSelect}
      placeholder="이메일로 검색"
      value={selectedFriendsEmail}
    >
      {friends.map((friend) => (
        <Option value={friend.email} label={friend.nickname} key={friend.id}>
          <UserInfo>
            <img src={friend.profileImageUrl} alt="" />
            <span>{friend.nickname}</span>
          </UserInfo>
        </Option>
      ))}
    </Select>
  );
}

export default AddMemberForm;
