import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignInWithEmailNickname } from '../../../domains/sign-in/sign-in.api';

import * as Styled from './SignInPage.styled';

import { RoutePath } from '../../../RoutePath';

// TODO: react-hook-form 도입? -> 소셜로 바뀌면 필요 없을수도
// TODO: input 컴포넌트로?

const initialValues = {
  email: '',
  password: '',
};

const SignInPage = () => {
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();
  const {
    mutateAsync: mutateSignInWithEmailNickname,
    isLoading,
    isError,
  } = useSignInWithEmailNickname();

  const handleInputsChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setValues({ ...values, [name]: value });
    },
    [values],
  );

  const handleSignInClick = useCallback(
    async (event: React.SyntheticEvent) => {
      event.preventDefault();

      try {
        await mutateSignInWithEmailNickname({ email: values.email, password: values.password });

        navigate(RoutePath.HOME);
      } catch (error) {
        alert('이메일 또는 닉네임, 비밀번호를 확인해 주세요.');
      }
    },
    [mutateSignInWithEmailNickname, values.email, values.password, navigate],
  );

  return isLoading ? (
    <div>Loading...</div>
  ) : isError ? (
    <div>Error</div>
  ) : (
    <Styled.Container>
      <Styled.WhyNotHereLogo />
      <Styled.SubContainer>
        <Styled.Title>로그인</Styled.Title>
        <Styled.SignInContainer onSubmit={handleSignInClick}>
          <Styled.Input
            name="email"
            placeholder="이메일 또는 닉네임"
            onChange={handleInputsChange}
          />
          <Styled.Input
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={handleInputsChange}
          />
          <Styled.SignInButton>로그인</Styled.SignInButton>
        </Styled.SignInContainer>
        <Styled.SignUpContainer>
          <Styled.Text>WhyNotHere 회원이 아닌가요? </Styled.Text>
          <Styled.SignUpLink to="/signup/check-email">지금 가입하세요.</Styled.SignUpLink>
        </Styled.SignUpContainer>
      </Styled.SubContainer>
    </Styled.Container>
  );
};

export default SignInPage;