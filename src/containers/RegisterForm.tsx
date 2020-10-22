import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMessage from '../components/ErrorMessage';
import Button from '../components/Button';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { registerActions } from '../modules/user';
import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16),
  passwordCheck: yup
    .string()
    .required()
    .oneOf([yup.ref('password')]),
  nickname: yup.string().required(),
});

export type RegisterFormType = {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
};

type RegisterFormProps = {};

function RegisterForm(props: RegisterFormProps) {
  const { register: reigsterResult, user } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const { handleSubmit, errors, register } = useForm<RegisterFormType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (form: RegisterFormType) => {
    dispatch(registerActions.request(form));
  };

  const { error, success } = reigsterResult;

  useEffect(() => {
    if (success) {
      alert('회원가입 성공');
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
      <ErrorMessage>
        {errors.password && '비밀번호는 8~16 사이로 입력해주세요'}
      </ErrorMessage>
      <Input
        placeholder="비밀번호 확인"
        type="password"
        name="passwordCheck"
        ref={register}
      />
      <ErrorMessage>
        {errors.passwordCheck && '비밀번호가 일치하지 않습니다'}
      </ErrorMessage>
      <Input placeholder="닉네임" name="nickname" ref={register} />
      <ErrorMessage>{error}</ErrorMessage>
      <Button type="submit" marginTop={30} size="large" fullWidth>
        회원 가입
      </Button>
    </form>
  );
}

export default RegisterForm;
