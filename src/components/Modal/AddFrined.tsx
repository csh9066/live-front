import { Input } from 'antd';
import React, { useState } from 'react';

type AddFrinedProps = {};

function AddFrined(prosp: AddFrinedProps) {
  const [email, setEmail] = useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  return (
    <Input
      placeholder="이메일을 입력하세요"
      onChange={onChangeEmail}
      value={email}
    />
  );
}

export default AddFrined;
