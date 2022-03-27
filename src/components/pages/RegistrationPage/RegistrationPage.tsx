import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { postCheckingNicknameAsync, postSignupAsync } from '../../../apis/request';

import * as Styled from './RegistrationPage.styled';
import { LocationState } from './RegistrationPage.type';

const initialValues = {
  nickname: '',
  password: '',
  passwordConfirmation: '',
};

const RegistrationPage = () => {
  const {
    state: { tmpEmail },
  } = useLocation() as LocationState;
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleInputsChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setValues({ ...values, [name]: value });
    },
    [values],
  );

  const handleCheckingNicknameClick = useCallback(async () => {
    event?.preventDefault();

    try {
      await postCheckingNicknameAsync(values.nickname);
      alert('사용 가능한 닉네임입니다.');
    } catch (error) {
      alert('이미 사용 중인 닉네임입니다.');
    }
  }, [values]);

  // TODO: 이미 사용 중인 닉네임으로 회원가입 하려는 경우
  const handleRegistrationSubmit = useCallback(
    async (event: React.SyntheticEvent) => {
      event.preventDefault();

      // TODO: validation 조정
      if (values.nickname === '') {
        alert('닉네임을 입력해 주세요.');

        return;
      }

      if (values.nickname.length < 3 || values.nickname.length > 20) {
        alert('닉네임은 3자 이상, 20자 이하로 입력해 주세요.');

        return;
      }

      if (values.password === '' || values.passwordConfirmation === '') {
        alert('비밀번호를 입력해 주세요.');

        return;
      }

      if (values.password !== values.passwordConfirmation) {
        alert('비밀번호가 일치하지 않습니다.');

        return;
      }

      if (values.password.length < 8 || values.password.length > 50) {
        alert('비밀번호는 8자 이상, 50자 이하로 입력해 주세요.');

        return;
      }

      try {
        await postSignupAsync(values.nickname, tmpEmail, values.password);

        alert('회원가입에 성공하셨습니다.');
        navigate('/login');
      } catch (error) {
        alert('다시 시도해 주세요.');
      }
    },
    [values, tmpEmail, navigate],
  );

  return (
    <Styled.Container>
      <Styled.SubContainer onSubmit={handleRegistrationSubmit}>
        <Styled.Title>회원가입</Styled.Title>
        <Styled.Input placeholder={tmpEmail} disabled />
        <Styled.NicknameContainer>
          <Styled.NicknameInput
            name="nickname"
            placeholder="닉네임"
            onChange={handleInputsChange}
          />
          <Styled.CheckDuplicationButton onClick={() => handleCheckingNicknameClick()}>
            중복 확인
          </Styled.CheckDuplicationButton>
        </Styled.NicknameContainer>
        <Styled.Input
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={handleInputsChange}
        />
        <Styled.Input
          name="passwordConfirmation"
          placeholder="비밀번호 재확인"
          type="password"
          onChange={handleInputsChange}
        />
        <Styled.RegistrationButton>회원가입</Styled.RegistrationButton>
      </Styled.SubContainer>
    </Styled.Container>
  );
};

export default RegistrationPage;
