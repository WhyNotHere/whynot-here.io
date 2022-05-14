// TODO: 인증 코드 유효시간 설정

import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getCheckingAuthenticationCodeAsync } from '../../../apis/request';

import * as Styled from './CheckAuthenticationCodePage.styled';
import type { LocationState } from './CheckAuthenticationCodePage.type';

import { RoutePath } from '../../../RoutePath';

const CheckAuthenticationCodePage = () => {
  const [code, setCode] = useState('');
  const {
    state: { tmpEmail },
  } = useLocation() as LocationState;
  const navigate = useNavigate();

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event: React.SyntheticEvent) => {
      event.preventDefault();

      try {
        if (!code) {
          alert('인증 코드를 입력해 주세요.');

          return;
        }

        await getCheckingAuthenticationCodeAsync(code, tmpEmail);
        navigate(`${RoutePath.SIGN_UP}/${RoutePath.REGISTRATION}`, {
          state: { tmpEmail: tmpEmail },
        });
      } catch (error) {
        alert('인증 코드가 올바르지 않습니다.');
      }
    },
    [code, tmpEmail, navigate],
  );

  return (
    <Styled.Container>
      <Styled.SubContainerForm onSubmit={handleSubmit}>
        <Styled.Title>인증 코드 확인</Styled.Title>
        <Styled.Input placeholder="인증 코드 8자리 입력" onChange={handleInputChange} />
        <Styled.CheckingEmailButton>확인</Styled.CheckingEmailButton>
      </Styled.SubContainerForm>
    </Styled.Container>
  );
};

export default CheckAuthenticationCodePage;
