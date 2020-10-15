import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../../components/auth/ErrorMessage';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16),
});

type LoginFormProps = {};

type LoginForm = {
  email: string;
  password: string;
};

function LoginForm(props: LoginFormProps) {
  const { register, errors, handleSubmit } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (form: LoginForm) => console.log(form);

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
      <ErrorMessage>
        {errors.password && '비밀번호는 8~16 사이로 입력해주세요'}
      </ErrorMessage>
      <Button type="submit" marginTop={30}>
        로그인
      </Button>
    </form>
  );
}

export default LoginForm;
