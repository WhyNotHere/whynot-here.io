import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import type * as SignInAction from '../../../domains/sign-in/sign-in.action';
import { useSignInWithEmailNickname } from '../../../domains/sign-in/sign-in.api';

import * as Styled from './SignInPage.styled';

import { RoutePath } from '../../../RoutePath';

const SignInPage = () => {
  const navigate = useNavigate();
  const { mutateAsync: mutateSignInWithEmailNickname, isError: isSignInError } =
    useSignInWithEmailNickname();
  const {
    register,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<SignInAction.SignInWithEmailNicknameCommand>({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = useCallback(
    async (data: SignInAction.SignInWithEmailNicknameCommand) => {
      try {
        await mutateSignInWithEmailNickname(data);
        navigate(RoutePath.HOME);
      } catch (error) {}
    },
    [mutateSignInWithEmailNickname, navigate],
  );

  return (
    <Styled.Container>
      <Styled.WhyNotHereLogo />

      <Styled.SubContainer>
        <Styled.Title>로그인</Styled.Title>

        <Styled.SignInForm onSubmit={handleSubmit(onSubmit)}>
          <Styled.Input placeholder="이메일 또는 닉네임" {...register('email')} />
          <Styled.Input placeholder="비밀번호" type="password" {...register('password')} />
          {isSignInError && (
            <Styled.ErrorMessage>
              {' '}
              이메일(닉네임) 또는 비밀번호를 잘못 입력했습니다.
              <br />
              입력하신 내용을 다시 확인해 주세요.
            </Styled.ErrorMessage>
          )}
          <Styled.SignInButton disabled={!dirtyFields.email || !dirtyFields.password}>
            로그인
          </Styled.SignInButton>
        </Styled.SignInForm>

        <Styled.SignUpContainer>
          <Styled.Text>WhyNotHere 회원이 아닌가요? </Styled.Text>
          <Styled.SignUpLink to="/signup/check-email">지금 가입하세요.</Styled.SignUpLink>
        </Styled.SignUpContainer>
      </Styled.SubContainer>
    </Styled.Container>
  );
};

export default SignInPage;
