import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../../components/auth/ErrorMessage';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { loginAction } from '../../modules/user';
import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16),
});

type LoginFormProps = {};

export type LoginFormType = {
  email: string;
  password: string;
};

function LoginForm(props: LoginFormProps) {
  const { login, user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, errors, handleSubmit } = useForm<LoginFormType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (form: LoginFormType) => {
    dispatch(loginAction(form));
  };

  const { error, success } = login;

  useEffect(() => {
    if (success) {
      history.push('/');
    }
  }, [success, history]);

  if (user) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="이메일" type="text" name="email" ref={register} />
      <ErrorMessage>
        {errors.email && '이메일 형식에 맞게 작성해주세요'}
      </ErrorMessage>
      <Input
        placeholder="비밀번호"
        type="password"
        name="password"
        ref={register}
      />
      <ErrorMessage>{error}</ErrorMessage>
      {/* <ErrorMessage>{error && '이메일이나 비밀번호가 틀립니다.'}</ErrorMessage> */}
      <Button type="submit" marginTop={30}>
        로그인
      </Button>
    </form>
  );
}

export default LoginForm;
