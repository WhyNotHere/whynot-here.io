import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postCheckingEmailAsync } from '../../../apis/request';

import * as Styled from './CheckEmailPage.styled';

import { RoutePath } from '../../../RoutePath';

const CheckEmailPage = () => {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  // TODO: 에러 처리 분리
  const handleSubmit = useCallback(
    async (event: React.SyntheticEvent) => {
      event.preventDefault();

      try {
        if (!email) {
          alert('이메일을 입력해 주세요.');

          return;
        }

        await postCheckingEmailAsync(email);
        alert('이메일을 발송했습니다.');

        navigate(`${RoutePath.SIGN_UP}/${RoutePath.CHECK_AUTHENTICATION_CODE}`, {
          state: { tmpEmail: email },
        });
      } catch (error) {
        alert('이미 가입한 이메일입니다.');
      }
    },
    [email, navigate],
  );

  return (
    <Styled.Container>
      <Styled.SubContainerForm onSubmit={handleSubmit}>
        <Styled.Title>이메일 중복 확인</Styled.Title>
        <Styled.Input
          type="email"
          placeholder="이메일을 입력해주세요."
          onChange={handleInputChange}
        />
        <Styled.CheckingEmailButton>이메일로 인증 코드 받기</Styled.CheckingEmailButton>
      </Styled.SubContainerForm>
    </Styled.Container>
  );
};

export default CheckEmailPage;
