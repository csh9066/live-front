import { Button, Form, Input, message } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AuthService from '../api/AuthService';
import { check } from '../modules/user';

type LocalLoginFormProps = {};

const StyledLoginForm = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function LocalLoginForm(props: LocalLoginFormProps) {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (value: any) => {
    try {
      const { data } = await AuthService.localLogin(value);
      dispatch(check(data));
      history.push('/app');
    } catch (e) {
      message.error('이메일이나 비밀번호가 틀렸습니다.');
    }
  };
  return (
    <StyledLoginForm>
      <Form {...layout} onFinish={onLogin}>
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: '이메일을 올바르게 입력해주세요',
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledLoginForm>
  );
}

export default LocalLoginForm;
