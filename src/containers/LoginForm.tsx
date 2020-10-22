import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../components/ErrorMessage';
import Button from '../components/Button';
import Input from '../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { loginActions } from '../modules/user';
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
    dispatch(loginActions.request(form));
  };

  const { error } = login;

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localstorage  not working');
      }
    }
  }, [user, history]);

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
      <Button type="submit" marginTop={30} fullWidth size="large">
        로그인
      </Button>
    </form>
  );
}

export default LoginForm;
